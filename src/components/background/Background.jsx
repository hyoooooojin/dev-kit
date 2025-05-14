import React from 'react';
import './Background.scss'; 

const Background = ({ isDark, children }) => {
  return (
    <div className={isDark ? 'backgroundContainer dark' : 'backgroundContainer'}>
      {children}
    </div>
  );
};

export default Background;
