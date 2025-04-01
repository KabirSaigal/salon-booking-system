import {
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  startAfter,
  getDoc
} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { db, storage } from '../config';
import { validators, AppError } from '../../utils/security';

const SERVICES_COLLECTION = 'services';

// Constants
const SERVICES_PER_PAGE = 12;
const MAX_IMAGE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp'];

// Helper function to validate service data
const validateServiceData = (data) => {
  const errors = [];
  
  if (!validators.service.name(data.name)) {
    errors.push('Invalid service name');
  }
  if (!validators.service.category(data.category)) {
    errors.push('Invalid category');
  }
  if (!validators.service.price(data.price)) {
    errors.push('Invalid price');
  }
  if (!validators.service.duration(data.duration)) {
    errors.push('Invalid duration');
  }
  if (!validators.service.description(data.description)) {
    errors.push('Invalid description');
  }

  if (errors.length > 0) {
    throw new AppError(errors.join(', '), 'INVALID_SERVICE_DATA');
  }
};

// Helper function to validate image file
const validateImageFile = (file) => {
  if (!file) {
    throw new AppError('No image file provided', 'MISSING_IMAGE');
  }

  if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
    throw new AppError('Invalid image type. Allowed types: JPEG, PNG, WebP', 'INVALID_IMAGE_TYPE');
  }

  if (file.size > MAX_IMAGE_SIZE) {
    throw new AppError('Image size exceeds 5MB limit', 'IMAGE_TOO_LARGE');
  }
};

// Get all services with pagination
export const getAllServices = async (lastDoc = null) => {
  try {
    let q = query(
      collection(db, SERVICES_COLLECTION),
      orderBy('name'),
      limit(SERVICES_PER_PAGE)
    );

    if (lastDoc) {
      q = query(q, startAfter(lastDoc));
    }

    const querySnapshot = await getDocs(q);
    const services = [];
    let lastVisible = null;

    querySnapshot.forEach((doc) => {
      services.push({ id: doc.id, ...doc.data() });
      lastVisible = doc;
    });

    return {
      services,
      lastVisible,
      hasMore: querySnapshot.docs.length === SERVICES_PER_PAGE
    };
  } catch (error) {
    console.error('Error fetching services:', error);
    throw new AppError('Failed to fetch services', 'FETCH_ERROR', 500);
  }
};

// Get services by category
export const getServicesByCategory = async (category) => {
  try {
    const q = query(
      collection(db, SERVICES_COLLECTION),
      where('category', '==', category),
      orderBy('name')
    );

    const querySnapshot = await getDocs(q);
    const services = [];

    querySnapshot.forEach((doc) => {
      services.push({ id: doc.id, ...doc.data() });
    });

    return services;
  } catch (error) {
    console.error('Error fetching services by category:', error);
    throw new AppError('Failed to fetch services by category', 'FETCH_ERROR', 500);
  }
};

// Add a new service
export const addService = async (serviceData, imageFile) => {
  try {
    // Validate service data
    validateServiceData(serviceData);

    let imageUrl = null;
    if (imageFile) {
      // Validate image file
      validateImageFile(imageFile);

      // Upload image to Firebase Storage
      const storageRef = ref(storage, `services/${Date.now()}_${imageFile.name}`);
      const snapshot = await uploadBytes(storageRef, imageFile);
      imageUrl = await getDownloadURL(snapshot.ref);
    }

    // Add service to Firestore
    const docRef = await addDoc(collection(db, SERVICES_COLLECTION), {
      ...serviceData,
      imageUrl,
      createdAt: new Date(),
      updatedAt: new Date()
    });

    return { id: docRef.id, ...serviceData, imageUrl };
  } catch (error) {
    console.error('Error adding service:', error);
    throw new AppError(
      error instanceof AppError ? error.message : 'Failed to add service',
      error instanceof AppError ? error.code : 'ADD_ERROR',
      error instanceof AppError ? error.status : 500
    );
  }
};

// Update a service
export const updateService = async (serviceId, serviceData, imageFile) => {
  try {
    // Validate service data
    validateServiceData(serviceData);

    // Get current service data
    const serviceRef = doc(db, SERVICES_COLLECTION, serviceId);
    const serviceDoc = await getDoc(serviceRef);
    
    if (!serviceDoc.exists()) {
      throw new AppError('Service not found', 'NOT_FOUND', 404);
    }

    const currentData = serviceDoc.data();
    let imageUrl = currentData.imageUrl;

    // Handle image update if new image is provided
    if (imageFile) {
      // Validate new image file
      validateImageFile(imageFile);

      // Delete old image if exists
      if (currentData.imageUrl) {
        const oldImageRef = ref(storage, currentData.imageUrl);
        await deleteObject(oldImageRef);
      }

      // Upload new image
      const storageRef = ref(storage, `services/${Date.now()}_${imageFile.name}`);
      const snapshot = await uploadBytes(storageRef, imageFile);
      imageUrl = await getDownloadURL(snapshot.ref);
    }

    // Update service in Firestore
    await updateDoc(serviceRef, {
      ...serviceData,
      imageUrl,
      updatedAt: new Date()
    });

    return { id: serviceId, ...serviceData, imageUrl };
  } catch (error) {
    console.error('Error updating service:', error);
    throw new AppError(
      error instanceof AppError ? error.message : 'Failed to update service',
      error instanceof AppError ? error.code : 'UPDATE_ERROR',
      error instanceof AppError ? error.status : 500
    );
  }
};

// Delete a service
export const deleteService = async (serviceId) => {
  try {
    // Get service data to delete associated image
    const serviceRef = doc(db, SERVICES_COLLECTION, serviceId);
    const serviceDoc = await getDoc(serviceRef);
    
    if (!serviceDoc.exists()) {
      throw new AppError('Service not found', 'NOT_FOUND', 404);
    }

    const serviceData = serviceDoc.data();

    // Delete associated image if exists
    if (serviceData.imageUrl) {
      const imageRef = ref(storage, serviceData.imageUrl);
      await deleteObject(imageRef);
    }

    // Delete service from Firestore
    await deleteDoc(serviceRef);

    return { id: serviceId };
  } catch (error) {
    console.error('Error deleting service:', error);
    throw new AppError(
      error instanceof AppError ? error.message : 'Failed to delete service',
      error instanceof AppError ? error.code : 'DELETE_ERROR',
      error instanceof AppError ? error.status : 500
    );
  }
}; 