import React from 'react'
import './darkModeSwitch.scss'

const DarkModeSwitch = ({ isDark, setIsDark }) => {
  return (
    <label className="toggle-switch">
      <input
        type="checkbox"
        checked={isDark}
        onChange={() => setIsDark(!isDark)}
      />
      <span className="button"></span>
    </label>
  )
}

export default DarkModeSwitch