import React, { useState } from 'react';
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom';
import Background from './components/background/Background.jsx';
import Home from './pages/home/Home.jsx';
import ViteReactKit from './pages/viteReactKit/ViteReactKit.jsx';
import GithubPagesKit from './pages/githubPagesKit/GithubPagesKit.jsx';

const App = () => {

  const [isDark, setIsDark] = useState(true);

  return (
    <BrowserRouter basename="/dev-kit">
      <Background isDark={isDark}>
        <Routes>
          <Route path="/" element={<Home isDark={isDark} setIsDark={setIsDark} />} />
          <Route path="/viteReactKit" element={<ViteReactKit isDark={isDark} />} />
          <Route path="/githubPagesKit" element={<GithubPagesKit isDark={isDark} />} />
        </Routes> 
      </Background>
    </BrowserRouter>
  );
};

export default App;