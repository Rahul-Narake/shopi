import { useState } from 'react';
import useCreateUser from '../hooks/auth/useCreateUser';
import { useLocation, useNavigate } from 'react-router';
import useSignIn from '../hooks/auth/useSignIn';

const Auth = () => {
  const path = useLocation();
  const { createUser, loading } = useCreateUser();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const { signin } = useSignIn();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (path.pathname == '/signup') {
      const data = await createUser(formData);
      if (data !== null) {
        navigate('/');
      }
    } else {
      const data = await signin(formData);
      if (data && data !== null) {
        navigate('/');
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-4">
          {path && path.pathname == '/signup' ? 'Sign up' : 'Sign In'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition"
            disabled={loading}
          >
            {path.pathname == '/signup' ? 'Sign Up' : 'Sign In'}
          </button>
        </form>
        {path.pathname == '/signup' ? (
          <div>
            <span>
              Alraedy have account?{' '}
              <a href="/signin" className="text-blue-500 underline">
                Sign in
              </a>
            </span>
          </div>
        ) : (
          <div>
            <span>
              Don't have account?{' '}
              <a href="/signup" className="text-blue-500 underline">
                Sign up
              </a>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Auth;
