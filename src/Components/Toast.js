import React from 'react';
import { useState } from 'react';

function Toast() {
  const [toast, setToast] = useState('block');

  function showToast() {
    setToast('block');
  }
  function hideToast() {
    setToast('none');
  }

  return (
    <div>
      <p style={{ display: toast }}> This is Toast </p>
      <button onClick={showToast}> show toast</button>
      <button onClick={hideToast}> hide toast</button>
    </div>
  );
}
export default Toast;
