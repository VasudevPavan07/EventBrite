import React, { useState } from 'react';
import axios from 'axios';
import { fetchData } from './api'; // Import fetchData function

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await fetchData(); // Make a GET request using fetchData function
      console.log('Fetched data:', data);

      // Continue with the login process
      const response = await axios.post('/api/users/login/', {
        username,
        password,
      });

      if (response.status === 200) {
        console.log('Login successful!');
        // Handle successful login (e.g., store token, redirect to dashboard)
      } else {
        setErrorMessage('Login failed!');
      }
    } catch (error) {
      console.error('Login error:', error);
      setErrorMessage('Login failed!');
    }
  };

  return (
    <div className='flex justify-center'>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded w-96 mt-20 px-8 pt-6 pb-8 mb-4">
        <h3 className="text-xl font-semibold mb-4">Login</h3>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        {errorMessage && <p className="text-red-500 text-xs italic">{errorMessage}</p>}
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
