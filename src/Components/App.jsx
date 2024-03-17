import React from 'react';

import { Routes, Route } from 'react-router-dom';
import NavBar from './Navbar';
import EventInfoPage from './EventInfoPage';
import EventForm from './CreateEventForm';

const App = () => {
  return (

    
      <div>
    
        <Routes>
        <Route path="/host-event" component={EventInfoPage} />
        <Route path="/create-event" component={EventForm} />
        </Routes>
      </div>
    
        
     
  );
};

export default App;
