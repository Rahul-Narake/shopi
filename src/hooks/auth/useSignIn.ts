import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import app from '../../utils/db';

function useSignIn() {
  const [loading, setLoading] = useState(false);
  const signin = async (data: { email: string; password: string }) => {
    setLoading(true);
    try {
      const auth = getAuth(app);
      const user = await signInWithEmailAndPassword(
        auth,
        data?.email,
        data?.password
      );
      return user.user;
    } catch (error: any) {
      console.log(error?.message);
      return null;
    } finally {
      setLoading(false);
    }
  };
  return { signin, loading };
}

export default useSignIn;
