import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';

// Initialize Stripe (replace with your publishable key)
const stripePromise = loadStripe('your_publishable_key');

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Get booking data from location state
  const bookingData = location.state?.bookingData;

  useEffect(() => {
    // Redirect if no booking data
    if (!bookingData) {
      navigate('/booking');
    }
  }, [bookingData, navigate]);

  // Handle payment submission
  const handlePayment = async () => {
    try {
      setLoading(true);
      setError(null);

      // In a real app, this would make an API call to your backend
      // to create a payment intent and get the client secret
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: bookingData.totalPrice * 100, // Convert to cents
          service: bookingData.service,
        }),
      });

      const { clientSecret } = await response.json();

      // Load Stripe
      const stripe = await stripePromise;
      if (!stripe) throw new Error('Stripe failed to load');

      // Create payment method
      const { error: stripeError, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: {
          // This would be your Stripe Elements card element
          // In a real app, you would use Stripe Elements
        },
      });

      if (stripeError) throw stripeError;

      // Confirm payment
      const { error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: paymentMethod.id,
      });

      if (confirmError) throw confirmError;

      // Payment successful
      navigate('/booking-confirmation');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (!bookingData) return null;

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Payment</h1>
        <p className="text-gray-600">Complete your booking payment</p>
      </div>

      <div className="card space-y-6">
        {/* Order Summary */}
        <div className="border-b pb-4">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Service:</span>
              <span>{bookingData.service}</span>
            </div>
            <div className="flex justify-between">
              <span>Date:</span>
              <span>{bookingData.date}</span>
            </div>
            <div className="flex justify-between">
              <span>Time:</span>
              <span>{bookingData.time}</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Total:</span>
              <span className="text-primary">${bookingData.totalPrice}</span>
            </div>
          </div>
        </div>

        {/* Payment Form */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Payment Details</h2>
          {/* In a real app, this would be Stripe Elements */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Card Number
              </label>
              <input
                type="text"
                placeholder="1234 5678 9012 3456"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Expiry Date
                </label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  CVC
                </label>
                <input
                  type="text"
                  placeholder="123"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="text-red-600 text-sm">
            {error}
          </div>
        )}

        {/* Pay Button */}
        <button
          onClick={handlePayment}
          disabled={loading}
          className="btn-primary w-full disabled:opacity-50"
        >
          {loading ? 'Processing...' : 'Pay Now'}
        </button>
      </div>
    </div>
  );
};

export default Payment; 