import { createContext, useContext, useState, useEffect } from 'react';
import { getCurrentUser, subscribeToAuthChanges } from '../firebase/services/auth';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check initial auth state
    getCurrentUser().then((userData) => {
      if (userData && userData.user) {
        setUser({
          ...userData.user,
          isAdmin: userData.userData?.role === 'admin'
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    // Subscribe to auth changes
    const unsubscribe = subscribeToAuthChanges((userData) => {
      if (userData && userData.user) {
        setUser({
          ...userData.user,
          isAdmin: userData.userData?.role === 'admin'
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const value = {
    user,
    isAdmin: user?.isAdmin || false,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}; 