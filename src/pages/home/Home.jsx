import React from 'react';
import './home.scss';
import { NavLink } from 'react-router-dom';
import DarkModeSwitch from '../../components/darkModeSwitch/DarkModeSwitch.jsx';

const Home = () => {
  return (
    <div className="homeContainer">
        <h1>dev-kit</h1>
        <nav>
            <NavLink to="/viteReactKit">vite react</NavLink>
            <NavLink to="/githubPagesKit">github pages</NavLink>
        </nav>
        <DarkModeSwitch />
    </div>
  );
}

export default Home;
