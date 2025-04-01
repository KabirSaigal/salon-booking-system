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
  Timestamp
} from 'firebase/firestore';
import { db } from '../config';

const APPOINTMENTS_COLLECTION = 'appointments';

// Get all appointments
export const getAllAppointments = async () => {
  try {
    const querySnapshot = await getDocs(
      query(collection(db, APPOINTMENTS_COLLECTION), orderBy('date', 'desc'))
    );
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      date: doc.data().date.toDate()
    }));
  } catch (error) {
    console.error('Error getting appointments:', error);
    throw error;
  }
};

// Get appointments by date range
export const getAppointmentsByDateRange = async (startDate, endDate) => {
  try {
    const querySnapshot = await getDocs(
      query(
        collection(db, APPOINTMENTS_COLLECTION),
        where('date', '>=', Timestamp.fromDate(startDate)),
        where('date', '<=', Timestamp.fromDate(endDate)),
        orderBy('date', 'asc')
      )
    );
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      date: doc.data().date.toDate()
    }));
  } catch (error) {
    console.error('Error getting appointments by date range:', error);
    throw error;
  }
};

// Get appointments by user
export const getAppointmentsByUser = async (userId) => {
  try {
    const querySnapshot = await getDocs(
      query(
        collection(db, APPOINTMENTS_COLLECTION),
        where('userId', '==', userId),
        orderBy('date', 'desc')
      )
    );
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      date: doc.data().date.toDate()
    }));
  } catch (error) {
    console.error('Error getting user appointments:', error);
    throw error;
  }
};

// Create a new appointment
export const createAppointment = async (appointmentData) => {
  try {
    const docRef = await addDoc(collection(db, APPOINTMENTS_COLLECTION), {
      ...appointmentData,
      date: Timestamp.fromDate(new Date(appointmentData.date)),
      status: 'pending',
      createdAt: Timestamp.now()
    });

    return {
      id: docRef.id,
      ...appointmentData,
      status: 'pending'
    };
  } catch (error) {
    console.error('Error creating appointment:', error);
    throw error;
  }
};

// Update appointment status
export const updateAppointmentStatus = async (appointmentId, status) => {
  try {
    const appointmentRef = doc(db, APPOINTMENTS_COLLECTION, appointmentId);
    await updateDoc(appointmentRef, {
      status,
      updatedAt: Timestamp.now()
    });

    return { id: appointmentId, status };
  } catch (error) {
    console.error('Error updating appointment status:', error);
    throw error;
  }
};

// Delete appointment
export const deleteAppointment = async (appointmentId) => {
  try {
    await deleteDoc(doc(db, APPOINTMENTS_COLLECTION, appointmentId));
  } catch (error) {
    console.error('Error deleting appointment:', error);
    throw error;
  }
};

// Check time slot availability
export const checkTimeSlotAvailability = async (date, time) => {
  try {
    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);
    
    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);

    const querySnapshot = await getDocs(
      query(
        collection(db, APPOINTMENTS_COLLECTION),
        where('date', '>=', Timestamp.fromDate(startOfDay)),
        where('date', '<=', Timestamp.fromDate(endOfDay)),
        where('time', '==', time)
      )
    );

    return querySnapshot.empty;
  } catch (error) {
    console.error('Error checking time slot availability:', error);
    throw error;
  }
}; 