// src/components/Notification.js
import React, { useEffect } from 'react';
import './Notification.css';
import { FaCheckCircle } from 'react-icons/fa';

const Notification = ({ message, visible, onClose }) => {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        onClose(); // Trigger the onClose function to hide the notification
      }, 3000); // 3 seconds

      // Cleanup the timeout if the component unmounts or visibility changes
      return () => clearTimeout(timer);
    }
  }, [visible, onClose]);

  if (!visible) return null;

  return (
    <div className="notification">
      <FaCheckCircle className="notification-icon" />
      <div className="notification-content">
        <div className="notification-title">{message.title}</div>
        <div className="notification-subtitle">{message.subtitle}</div>
      </div>
    </div>
  );
};

export default Notification;
