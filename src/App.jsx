import React from 'react';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Background from './components/background/Background.jsx';
import Home from './pages/home/Home.jsx';
import ViteReactKit from './pages/viteReactKit/ViteReactKit.jsx';
import GithubPagesKit from './pages/githubPagesKit/GithubPagesKit.jsx';

const App = () => {

  return (
    <RecoilRoot>
      <BrowserRouter basename="/dev-kit">
        <Background>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/viteReactKit" element={<ViteReactKit />} />
            <Route path="/githubPagesKit" element={<GithubPagesKit />} />
          </Routes> 
        </Background>
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default App;