import React from 'react';
import './Background.scss'; 
import { useRecoilValue } from 'recoil';
import { darkModeState } from '../../atoms/themeAtom';

const Background = ({ children }) => {
  const isDark = useRecoilValue(darkModeState);

  return (
    <div className={isDark ? 'backgroundContainer dark' : 'backgroundContainer'}>
      {children}
    </div>
  );
};

export default Background;
