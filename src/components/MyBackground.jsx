import React from 'react';

const backgroundStyle = {
  backgroundImage: "url('images/1.png')",
  backgroundSize: 'cover',
  minHeight: '100vh',
  width: '100%', // רוחב הרקע יהיה 100% של רוחב החלון
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: -1
};

function MyBackground() {
  return (
    <div style={backgroundStyle}></div>
  );
}

export default MyBackground;
