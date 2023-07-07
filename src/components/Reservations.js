import React, { useState } from 'react';
import DatePicker from '../Date/DatePicker';

const Reservations = () => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handlePrint = () => {
    
  };

  return (
    <div>
      <h2>Reservations</h2>
      <p>Small Conference Room</p>
      <DatePicker />
      
    </div>
  );
};

export default Reservations;
