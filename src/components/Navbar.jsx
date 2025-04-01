import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useAuth } from '../contexts/AuthContext';
import { logout } from '../firebase/services/auth';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { user, isAdmin } = useAuth();

  // Navigation links
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Book Now', href: '/booking' },
  ];

  const handleLogout = async () => {
    try {
      setIsOpen(false); // Close mobile menu before logging out
      await logout();
      // Wait for a brief moment to ensure auth state is cleared
      await new Promise(resolve => setTimeout(resolve, 100));
      // Navigate to home page after logout
      navigate('/', { replace: true });
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and brand name */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary">
              Manju Salon
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8 sm:items-center">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-900 hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
              >
                {item.name}
              </Link>
            ))}
            {isAdmin && (
              <Link
                to="/admin"
                className="text-gray-900 hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
              >
                Admin Dashboard
              </Link>
            )}
            {user && (
              <button
                onClick={handleLogout}
                className="ml-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-300 text-sm font-medium"
              >
                Logout
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-primary hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            {isAdmin && (
              <Link
                to="/admin"
                className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-primary hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                Admin Dashboard
              </Link>
            )}
            {user && (
              <button
                onClick={handleLogout}
                className="w-full text-left px-3 py-2 text-base font-medium text-red-600 hover:text-red-700 hover:bg-gray-50"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 