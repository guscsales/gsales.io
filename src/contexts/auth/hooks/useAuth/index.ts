import { useState, useEffect } from 'react';
import Storage from '@contexts/shared/services/storage';
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
} from 'firebase/auth';

export default function useAuth() {
  const auth = getAuth();
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(Storage.read('cmsAuthUser'));
  }, []);

  async function signIn(email: string, password: string) {
    try {
      const {
        user: { uid },
      } = await signInWithEmailAndPassword(auth, email, password);
      const authUser = { uid };

      setUser(authUser);
      Storage.save({
        key: 'cmsAuthUser',
        data: authUser,
      });

      return user;
    } catch (e) {
      console.error('useAuth.signIn', e);
      throw e;
    }
  }

  async function signOut() {
    try {
      await firebaseSignOut(auth);
      Storage.remove('cmsAuthUser');
    } catch (e) {
      console.error('useAuth.signOut', e);
    }
  }

  return {
    user,
    signIn,
    signOut,
  };
}
