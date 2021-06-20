import React from 'react';
import renderInstruction from './instruction';

function Start () {
  return (
    <div
      className="instruction"
      dangerouslySetInnerHTML={{ __html: renderInstruction }}
    />
  );
}

export default Start;
