import React, { useState } from 'react';
import axios from 'axios';
import { fetchData } from './api'; // Import fetchData function

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match!');
      return;
    }

    try {
      const data = await fetchData(); // Make a GET request using fetchData function
      console.log('Fetched data:', data);

      const response = await axios.post('/api/users/register/', {
        username,
        password,
      });

      if (response.status === 201) {
        console.log('Registration successful!');
        // Handle successful registration (e.g., redirect to login page)
      } else {
        setErrorMessage('Registration failed!');
      }
    } catch (error) {
      console.error('Registration error:', error);
      setErrorMessage('Registration failed!');
    }
  };

  return (
    <div className='flex justify-center'>
      <form className='w-96 mt-20 bg-zinc-700 flex flex-col justify-center space-y-4 border p-4 rounded-lg' onSubmit={handleSubmit}>
        <h3 className="text-white text-lg font-semibold">Register</h3>
        <label htmlFor="username" className="text-white">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="bg-gray-100 border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
        />
        <label htmlFor="password" className="text-white">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-gray-100 border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
        />
        <label htmlFor="confirmPassword" className="text-white">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="bg-gray-100 border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
        />
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
