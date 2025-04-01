import { useState, useEffect } from 'react';
import { addService, getAllServices, deleteService } from '../firebase/services/services';
import { useAuth } from '../contexts/AuthContext';
import { validators } from '../utils/security';

const AdminDashboard = () => {
  const { user } = useAuth();
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [lastVisible, setLastVisible] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  // State for new service form
  const [newService, setNewService] = useState({
    name: '',
    category: '',
    price: '',
    duration: '',
    description: '',
  });

  // Fetch services on component mount
  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async (loadMore = false) => {
    try {
      setLoading(true);
      setError(null);
      const result = await getAllServices(loadMore ? lastVisible : null);
      setServices(prev => loadMore ? [...prev, ...result.services] : result.services);
      setLastVisible(result.lastVisible);
      setHasMore(result.hasMore);
    } catch (err) {
      setError(err.message || 'Failed to load services. Please try again.');
      console.error('Error fetching services:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewService(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type
      if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) {
        setError('Please select a valid image file (JPEG, PNG, or WebP)');
        e.target.value = '';
        return;
      }
      // Validate file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        setError('Image size should be less than 5MB');
        e.target.value = '';
        return;
      }
      setSelectedImage(file);
      setError(null);
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    if (document.querySelector('input[name="image"]')) {
      document.querySelector('input[name="image"]').value = '';
    }
  };

  const handleAddService = async (e) => {
    e.preventDefault();
    try {
      setIsSubmitting(true);
      setError(null);

      // Validate service data
      const serviceData = {
        ...newService,
        price: parseFloat(newService.price),
      };

      // Add the service to Firebase
      await addService(serviceData, selectedImage);

      // Reset form
      setNewService({
        name: '',
        category: '',
        price: '',
        duration: '',
        description: '',
      });
      setSelectedImage(null);
      if (e.target.image) {
        e.target.image.value = '';
      }

      // Refresh services list
      await fetchServices();
    } catch (err) {
      setError(err.message || 'Failed to add service. Please try again.');
      console.error('Error adding service:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteService = async (serviceId) => {
    if (window.confirm('Are you sure you want to delete this service?')) {
      try {
        setLoading(true);
        setError(null);
        await deleteService(serviceId);
        await fetchServices();
      } catch (err) {
        setError(err.message || 'Failed to delete service. Please try again.');
        console.error('Error deleting service:', err);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
        <p className="text-gray-600">Manage your salon services</p>
      </div>

      {/* Error Display */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          {error}
        </div>
      )}

      {/* Add New Service Form */}
      <div className="card mb-12">
        <h2 className="text-2xl font-semibold mb-6">Add New Service</h2>
        <form onSubmit={handleAddService} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Service Name
              </label>
              <input
                type="text"
                name="name"
                value={newService.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                name="category"
                value={newService.category}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="">Select category</option>
                <option value="Hair">Hair</option>
                <option value="Skin">Skin</option>
                <option value="Nails">Nails</option>
                <option value="Wellness">Wellness</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price ($)
              </label>
              <input
                type="number"
                name="price"
                value={newService.price}
                onChange={handleChange}
                required
                min="0"
                step="0.01"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Duration
              </label>
              <input
                type="text"
                name="duration"
                value={newService.duration}
                onChange={handleChange}
                required
                placeholder="e.g., 1 hour"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={newService.description}
              onChange={handleChange}
              required
              rows="3"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Service Image
            </label>
            <div className="space-y-4">
              <input
                type="file"
                name="image"
                onChange={handleImageChange}
                accept="image/jpeg,image/png,image/webp"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                disabled={isSubmitting}
              />
              {selectedImage && (
                <div className="relative">
                  <img
                    src={URL.createObjectURL(selectedImage)}
                    alt="Preview"
                    className="w-32 h-32 object-cover rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={handleRemoveImage}
                    className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary w-full disabled:opacity-50"
          >
            {isSubmitting ? 'Adding...' : 'Add Service'}
          </button>
        </form>
      </div>

      {/* Services List */}
      <div className="card">
        <h2 className="text-2xl font-semibold mb-6">Current Services</h2>
        {loading ? (
          <div className="flex justify-center items-center min-h-[200px]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : services.length === 0 ? (
          <div className="text-center text-gray-500 py-8">
            No services available. Add your first service using the form above.
          </div>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Image</th>
                    <th className="text-left py-3 px-4">Name</th>
                    <th className="text-left py-3 px-4">Category</th>
                    <th className="text-left py-3 px-4">Price</th>
                    <th className="text-left py-3 px-4">Duration</th>
                    <th className="text-left py-3 px-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {services.map(service => (
                    <tr key={service.id} className="border-b">
                      <td className="py-3 px-4">
                        {service.imageUrl ? (
                          <img
                            src={service.imageUrl}
                            alt={service.name}
                            className="w-16 h-16 object-cover rounded"
                          />
                        ) : (
                          <div className="w-16 h-16 bg-gray-200 rounded flex items-center justify-center">
                            <span className="text-gray-400 text-sm">No image</span>
                          </div>
                        )}
                      </td>
                      <td className="py-3 px-4">{service.name}</td>
                      <td className="py-3 px-4">{service.category}</td>
                      <td className="py-3 px-4">${service.price}</td>
                      <td className="py-3 px-4">{service.duration}</td>
                      <td className="py-3 px-4">
                        <button
                          onClick={() => handleDeleteService(service.id)}
                          className="text-red-600 hover:text-red-800 disabled:opacity-50"
                          disabled={loading}
                        >
                          {loading ? 'Deleting...' : 'Delete'}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {hasMore && (
              <div className="mt-6 text-center">
                <button
                  onClick={() => fetchServices(true)}
                  className="btn-secondary"
                  disabled={loading}
                >
                  {loading ? 'Loading...' : 'Load More'}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard; 