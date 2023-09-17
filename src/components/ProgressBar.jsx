import React from 'react';

const ProgressBar = ({ completeness }) => {
  const barStyle = {
    width: `${completeness}%`,
    height: '10px',
    backgroundColor: '#3563E9',
    transition: 'width 0.5s',
    position: 'relative',
    borderRadius: '10px',
  };

  const dotSize = 20; // Adjust the dot size as needed

  const dotPosition = `calc(${completeness}% - ${dotSize / 2}px)`;

  const dotStyle = {
    width: `${dotSize}px`,
    height: `${dotSize}px`,
    backgroundColor: '#3563E9',
    borderRadius: '50%',
    position: 'absolute',
    top: '50%', // Center vertically
    transform: 'translateY(-50%)', // Center vertically
    left: dotPosition,
    border: '2px solid white',
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* You can add labels or additional content here if needed */}
      </div>
      <div
        style={{
          backgroundColor: 'lightgray',
          height: '10px',
          position: 'relative',
          borderRadius: '10px',
        }}
      >
        <div style={barStyle}></div>
        <div style={dotStyle}></div> {/* Add the dot */}
      </div>
    </div>
  );
};

export default ProgressBar;
