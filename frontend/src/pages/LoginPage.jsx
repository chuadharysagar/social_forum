import React, { useState } from 'react';
import { assets } from '../assets/assets';

const LoginPage = () => {
  const loginText = 'Welcome back, Login here';
  const signinText = 'Create a new account';

  const [showLogin, setShowLogin] = useState('signin');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (showLogin === 'login') {
      console.log('Login Details:', { email: formData.email, password: formData.password });
    } else {
      console.log('Signup Details:', formData);
    }
    // Add login or signup logic here

  };


  
  return (
    <div className="h-screen w-screen bg-gray-100 bg-opacity-50 flex justify-center items-center">
      <div className="bg-gray-400 h-[70%] w-[36%] rounded-md flex flex-col gap-8 pt-6 items-center">
        <img src={assets.logo} alt="logo" height={200} width={200} />

        <div>
          <h1 className="text-3xl font-bold">{showLogin === 'login' ? loginText : signinText}</h1>
          <p className="text-gray-700">To use Snapgram, please enter your details</p>
        </div>

        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          {showLogin === 'signin' && (
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-semibold">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="p-2 rounded-md bg-gray-200"
              />
            </div>
          )}

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="p-2 rounded-md bg-gray-200"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="font-semibold">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="p-2 rounded-md bg-gray-200"
            />
          </div>

          <button className="p-3 bg-blue-600 text-lg font-semibold text-white rounded-md">
            {showLogin === 'login' ? 'Login' : 'Sign up'}
          </button>
          {showLogin === 'signin' ? (
            <p className="text-sm text-center">
              Already have an account?{' '}
              <span
                onClick={() => setShowLogin('login')}
                className="text-blue-700 cursor-pointer font-semibold"
              >
                Login here
              </span>
            </p>
          ) : (
            <p className="text-sm text-center">
              Create an account{' '}
              <span
                onClick={() => setShowLogin('signin')}
                className="text-blue-700 cursor-pointer font-semibold"
              >
                click here
              </span>
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
