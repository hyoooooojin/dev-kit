import React from 'react';
import './home.scss';
import { NavLink } from 'react-router-dom';
import DarkModeSwitch from '../../components/darkModeSwitch/DarkModeSwitch.jsx';

const Home = ({ isDark, setIsDark }) => {
  return (
    <div className="homeContainer">
        <h1>dev-kit</h1>
        <nav>
            <NavLink to="/viteReactKit" activeClassName="active">vite react</NavLink>
            <NavLink to="/githubPagesKit" activeClassName="active">github pages</NavLink>
        </nav>
        <DarkModeSwitch isDark={isDark} setIsDark={setIsDark} />
    </div>
  );
}

export default Home;
