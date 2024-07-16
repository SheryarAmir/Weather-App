// Alert.js
import React from 'react';
import './Alert.css';
import alertIcon from '../assets/alert.png'; // Use any alert icon you prefer

const Alert = ({ message, onClose }) => {
  return (
    <div className="alert">
      <img src={alertIcon} alt="Alert Icon" />
      <span>{message}</span>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default Alert;
