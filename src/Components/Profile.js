import React from 'react';
import { useState } from 'react';

function Profile({ ProfileValue }) {
  return (
    <div>
      <h4 style={{ display: ProfileValue }}> This is Profile </h4>
    </div>
  );
}
export default Profile;
