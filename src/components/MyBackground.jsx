import React from 'react';

const backgroundStyle = {
  backgroundImage: "url('images/1.jpg')",
  backgroundSize: 'cover',
  minHeight: '100vh',
  position: 'fixed',  // קבע את העמוד במקום קבוע בחלון הדפדפן
  top: 0,             // העמוד מתחיל מלמעלה של חלון הדפדפן
  left: 0,            // העמוד מתחיל מהצד השמאלי של חלון הדפדפן
  width: '100%',      // רוחב העמוד יהיה 100% מרוחב החלון
  zIndex: -1          // שימוש ב-zIndex נועד לוודא שהרקע נמצא מתחת לתוכן הרגיל של העמוד
};

function MyBackground() {
  return (
    <div style={backgroundStyle}>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default MyBackground;
