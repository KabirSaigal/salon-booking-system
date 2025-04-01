import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllServices, getServicesByCategory } from '../firebase/services/services';

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lastVisible, setLastVisible] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);

  // Categories for filtering
  const categories = ['All', 'Hair', 'Skin', 'Nails', 'Wellness'];

  useEffect(() => {
    fetchServices();
  }, [selectedCategory]);

  const fetchServices = async (loadMore = false) => {
    try {
      if (!loadMore) {
        setLoading(true);
        setError(null);
      } else {
        setLoadingMore(true);
      }

      let result;
      if (selectedCategory === 'All') {
        result = await getAllServices(loadMore ? lastVisible : null);
      } else {
        result = await getServicesByCategory(selectedCategory);
      }

      setServices(prev => loadMore ? [...prev, ...result.services] : result.services);
      setLastVisible(result.lastVisible);
      setHasMore(result.hasMore);
    } catch (err) {
      console.error('Error fetching services:', err);
      setError(err.message || 'Failed to load services. Please try again later.');
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  const handleLoadMore = () => {
    fetchServices(true);
  };

  if (loading && !loadingMore) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-600 min-h-[400px] flex items-center justify-center">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-gray-600">Explore our range of beauty and wellness services</p>
      </div>

      {/* Category Filter */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full transition-colors duration-300 ${
              selectedCategory === category
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Services Grid */}
      {services.length === 0 ? (
        <div className="text-center text-gray-500 py-12">
          {selectedCategory === 'All' 
            ? 'No services available at the moment.'
            : `No services found in ${selectedCategory} category.`}
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="card group">
                <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                  {service.imageUrl ? (
                    <img
                      src={service.imageUrl}
                      alt={service.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-400">No image available</span>
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-primary font-bold">${service.price}</span>
                  <span className="text-gray-500">{service.duration}</span>
                </div>
                <Link
                  to={`/booking?service=${service.id}`}
                  className="btn-primary w-full text-center block"
                >
                  Book Now
                </Link>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {hasMore && selectedCategory === 'All' && (
            <div className="text-center mt-12">
              <button
                onClick={handleLoadMore}
                disabled={loadingMore}
                className="btn-secondary disabled:opacity-50"
              >
                {loadingMore ? 'Loading...' : 'Load More Services'}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Services; 