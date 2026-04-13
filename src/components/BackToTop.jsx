import React from 'react';

const BackToTop = ({ showBackToTop, onClick }) => {
  return (
    <button className={`back-to-top ${showBackToTop ? 'visible' : ''}`} onClick={onClick}>
      Top
    </button>
  );
};

export default BackToTop;