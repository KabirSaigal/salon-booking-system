import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

const Booking = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: searchParams.get('service') || '',
    notes: '',
  });

  // Available time slots
  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00',
  ];

  // Services data (in a real app, this would come from an API)
  const services = [
    { id: '1', name: 'Haircut & Styling', price: 45 },
    { id: '2', name: 'Hair Coloring', price: 120 },
    { id: '3', name: 'Facial Treatment', price: 75 },
    { id: '4', name: 'Manicure', price: 35 },
    { id: '5', name: 'Pedicure', price: 45 },
    { id: '6', name: 'Massage', price: 90 },
  ];

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send the data to a backend API
    console.log('Booking data:', formData);
    // Navigate to payment page
    navigate('/payment', { state: { bookingData: formData } });
  };

  // Calculate total price
  const selectedService = services.find(s => s.id === formData.service);
  const totalPrice = selectedService ? selectedService.price : 0;

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Book an Appointment</h1>
        <p className="text-gray-600">Schedule your beauty treatment today</p>
      </div>

      <form onSubmit={handleSubmit} className="card space-y-6">
        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        {/* Service Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Service
          </label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="">Select a service</option>
            {services.map(service => (
              <option key={service.id} value={service.id}>
                {service.name} - ${service.price}
              </option>
            ))}
          </select>
        </div>

        {/* Date and Time Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Date
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Time
            </label>
            <select
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="">Select time</option>
              {timeSlots.map(time => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Notes */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Special Notes
          </label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        {/* Total Price */}
        <div className="text-right">
          <p className="text-lg font-semibold">
            Total: <span className="text-primary">${totalPrice}</span>
          </p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn-primary w-full"
        >
          Continue to Payment
        </button>
      </form>
    </div>
  );
};

export default Booking; 