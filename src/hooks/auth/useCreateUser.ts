import { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import app from '../../utils/db';
function useCreateUser() {
  const [loading, setLoading] = useState(false);
  const createUser = async (data: { email: string; password: string }) => {
    setLoading(true);
    try {
      const auth = getAuth(app);
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data?.email,
        data?.password
      );
      return user;
    } catch (error: any) {
      console.log(error?.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { createUser, loading };
}

export default useCreateUser;
