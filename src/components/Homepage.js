import React, { useState } from 'react';
import './Homepage.css';
import NavLink from './NavLink';
import Main from './Main'

const Homepage = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (message) => {
    setMessages([...messages, { text: message, sender: 'user' }]);
    // Implement the logic to send the user message to the ChatGPT API here
    // For simplicity, we're just adding the user's message to the messages state
  };

  return (
    <div className="homepage-container">
      
    <div className='left'> <NavLink/> 
    
    </div> 
    
    <div className='right'> <Main/></div> 
    </div>
  );
};

export default Homepage;
