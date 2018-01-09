import React from 'react';
import Button from './Button';

const Booking = (props) => {
  return (
    <section className='booking-wrapper container'>
      <h3>Make a booking</h3>
      <div className='booking-content'>
        <div className='one-third'>
          <label>Time</label>
          <input type='time' placeholder='Enter your time'/>
        </div>

        <div className='one-third'>
          <label>Date</label>
          <input type='date'/>
        </div>

        <div className='one-third'>
          <label>Guests</label>
          <select>
            <option>1</option>
            <option>2</option>
            <option>3+</option>
          </select>
        </div>
      </div>
      <Button />
    </section>
  )
};


export default Booking;
