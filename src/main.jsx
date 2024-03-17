import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './Components/Navbar.jsx';
import RegistrationForm from './Components/RegistrationForm.jsx';
import LoginForm from './Components/LoginForm.jsx';
import EventForm from './Components/CreateEventForm.jsx';
import App from './Components/App.jsx'; // Assuming this is your main application component
import EventInfoPage from './Components/EventInfoPage.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Main = () => {
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);

  const toggleRegistrationForm = () => {
    setShowRegistrationForm(true);
    setShowLoginForm(false);
  };

  const toggleLoginForm = () => {
    setShowLoginForm(true);
    setShowRegistrationForm(false);
  };

  return (
    <React.StrictMode>
      <BrowserRouter>
        <Navbar
          toggleRegistrationForm={toggleRegistrationForm}
          toggleLoginForm={toggleLoginForm}
        />
        {showRegistrationForm && <RegistrationForm />}
        {showLoginForm && !showRegistrationForm && <LoginForm />}

      <App />
      </BrowserRouter>
    </React.StrictMode>
  );
};

// Use ReactDOM.createRoot for React 18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);
