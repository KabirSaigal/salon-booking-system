import { auth, db } from '../firebase/config';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';

// Test Firebase setup
export const testFirebaseSetup = async () => {
  console.log('Testing Firebase Setup...');

  try {
    // 1. Test Firebase initialization
    console.log('1. Testing Firebase initialization...');
    if (!auth || !db) {
      throw new Error('Firebase not properly initialized');
    }
    console.log('✅ Firebase initialized successfully');

    // 2. Test Firestore access
    console.log('2. Testing Firestore access...');
    const testDoc = doc(db, 'test', 'test');
    await setDoc(testDoc, { test: true }, { merge: true });
    const testRead = await getDoc(testDoc);
    if (!testRead.exists()) {
      throw new Error('Could not read/write to Firestore');
    }
    console.log('✅ Firestore access successful');

    // 3. Test Authentication
    console.log('3. Testing Authentication...');
    const currentUser = auth.currentUser;
    console.log('Current user:', currentUser?.email || 'No user signed in');

    // 4. Test Admin Access
    if (currentUser) {
      console.log('4. Testing Admin Access...');
      const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
      if (!userDoc.exists()) {
        console.log('❌ User document does not exist');
        console.log('Please create a user document with the following structure:');
        console.log(`
          Collection: users
          Document ID: ${currentUser.uid}
          Data: {
            role: "admin",
            email: "${currentUser.email}",
            name: "Admin Name"
          }
        `);
      } else {
        const userData = userDoc.data();
        if (userData.role !== 'admin') {
          console.log('❌ User is not an admin');
          console.log('Current role:', userData.role);
          console.log('Please update the user document to include role: "admin"');
        } else {
          console.log('✅ Admin access confirmed');
        }
      }
    }

    console.log('Firebase setup test completed');
    return true;
  } catch (error) {
    console.error('Firebase setup test failed:', error);
    return false;
  }
};

// Create admin user
export const createAdminUser = async (email, password) => {
  try {
    // 1. Create auth user
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // 2. Create admin document
    await setDoc(doc(db, 'users', user.uid), {
      role: 'admin',
      email: email,
      name: 'Admin User',
      createdAt: new Date().toISOString()
    });

    console.log('Admin user created successfully');
    return user;
  } catch (error) {
    console.error('Error creating admin user:', error);
    throw error;
  }
}; 