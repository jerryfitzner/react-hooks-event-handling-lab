// Code Keypad Component Here
import React from 'react';

const Keypad = () => {
  const password = () => {
    console.log('Entering password...');
  };

  return (
  <input type="password" onChange={password}></input>
  )}

export default Keypad;