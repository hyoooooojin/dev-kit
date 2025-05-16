import React from 'react';
import './darkModeSwitch.scss'
import { useRecoilState } from 'recoil';
import { darkModeState } from '../../atoms/themeAtom';


const DarkModeSwitch = () => {
  const [isDark, setIsDark] = useRecoilState(darkModeState);

  return (
    <label className="toggleSwitch">
      <input
        type="checkbox"
        checked={isDark}
        onChange={() => setIsDark(!isDark)}
      />
      <span className="button"></span>
    </label>
  )
}

export default DarkModeSwitch;
