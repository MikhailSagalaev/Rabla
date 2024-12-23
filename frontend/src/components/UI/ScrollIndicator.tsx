import React from 'react';

const ScrollIndicator: React.FC = () => {
  return (
    <div className="animate-bounce">
      <svg 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="white" 
        strokeWidth="2"
      >
        <path d="M12 5v14M19 12l-7 7-7-7" />
      </svg>
    </div>
  );
};

export default ScrollIndicator; 