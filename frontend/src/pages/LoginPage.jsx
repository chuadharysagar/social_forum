import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [showLogin, setShowLogin] = useState('signin');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const url =
      showLogin === 'login'
        ? 'http://localhost:5000/login'
        : 'http://localhost:5000/signup';
    const body = JSON.stringify(
      showLogin === 'login'
        ? { email: formData.email, password: formData.password }
        : formData
    );

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: body,
      });

      const data = await response.json();

      if (response.ok) {
        setError('');
        setMessage(showLogin === 'login' ? 'Login successful!' : 'Signup successful! Please log in.');

        if (showLogin === 'login') {
          localStorage.setItem('token', data.token);
          navigate('/home'); // Use React Router for navigation
        } else {
          setShowLogin('login');
        }
      } else {
        setMessage('');
        setError(data.error || 'An error occurred. Please try again.');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen w-screen bg-gray-100 bg-opacity-50 flex justify-center items-center">
      <div className="bg-gray-400 h-[70%] w-[36%] rounded-md flex flex-col gap-8 pt-6 items-center">
        <img src={assets.logo} alt="logo" height={200} width={200} />
        <div>
          <h1 className="text-3xl font-bold">
            {showLogin === 'login' ? 'Welcome back, Login here' : 'Create a new account'}
          </h1>
          <p className="text-gray-700">To use Snapgram, please enter your details</p>
        </div>

        {message && <div className="bg-green-500 text-white p-2 rounded-md text-center w-full">{message}</div>}
        {error && <div className="bg-red-500 text-white p-2 rounded-md text-center w-full">{error}</div>}

        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          {showLogin === 'signin' && (
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-semibold">Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="p-2 rounded-md bg-gray-200"
                required
              />
            </div>
          )}

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-semibold">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="p-2 rounded-md bg-gray-200"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="font-semibold">Password</label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="p-2 rounded-md bg-gray-200"
              required
            />
          </div>

          <button
            type="submit"
            className="p-3 bg-blue-600 text-lg font-semibold text-white rounded-md"
            disabled={loading}
          >
            {loading ? 'Please wait...' : showLogin === 'login' ? 'Login' : 'Sign up'}
          </button>

          <p className="text-sm text-center">
            {showLogin === 'signin'
              ? 'Already have an account?'
              : 'Create an account'}{' '}
            <span
              onClick={() => setShowLogin(showLogin === 'signin' ? 'login' : 'signin')}
              className="text-blue-700 cursor-pointer font-semibold"
            >
              {showLogin === 'signin' ? 'Login here' : 'Click here'}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
