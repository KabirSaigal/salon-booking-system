import { 
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../config';

// Sign in with email and password
export const signIn = async (email, password) => {
  try {
    console.log('Attempting to sign in...'); // Debug log
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log('Sign in successful, checking admin status...'); // Debug log
    
    // Check if user is admin
    const userDoc = await getDoc(doc(db, 'users', userCredential.user.uid));
    console.log('User document:', userDoc.data()); // Debug log
    
    if (!userDoc.exists()) {
      console.log('No user document found'); // Debug log
      await signOut(auth);
      throw new Error('User document not found');
    }
    
    if (userDoc.data().role !== 'admin') {
      console.log('User is not admin'); // Debug log
      await signOut(auth);
      throw new Error('Unauthorized access');
    }
    
    console.log('Admin access confirmed'); // Debug log
    return {
      user: userCredential.user,
      userData: userDoc.data()
    };
  } catch (error) {
    console.error('Sign in error:', error); // Debug log
    throw error;
  }
};

// Sign out
export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error('Sign out error:', error);
    throw error;
  }
};

// Get current auth state
export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      unsubscribe();
      if (user) {
        try {
          const userDoc = await getDoc(doc(db, 'users', user.uid));
          if (userDoc.exists() && userDoc.data().role === 'admin') {
            resolve({ user, userData: userDoc.data() });
          } else {
            await signOut(auth);
            resolve(null);
          }
        } catch (error) {
          console.error('Error getting user data:', error);
          await signOut(auth);
          resolve(null);
        }
      } else {
        resolve(null);
      }
    }, reject);
  });
};

// Subscribe to auth state changes
export const subscribeToAuthChanges = (callback) => {
  return onAuthStateChanged(auth, async (user) => {
    if (user) {
      try {
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        const isAdmin = userDoc.exists() && userDoc.data().role === 'admin';
        callback({ user, isAdmin, userData: userDoc.data() });
      } catch (error) {
        console.error('Error in auth subscription:', error);
        callback({ user: null, isAdmin: false, userData: null });
      }
    } else {
      callback({ user: null, isAdmin: false, userData: null });
    }
  });
}; 