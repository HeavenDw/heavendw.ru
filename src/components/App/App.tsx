import React, { FC } from 'react';
import styles from './App.module.css';
import Header from '../Header/Header';
import { Route, Routes } from 'react-router-dom';
import PortfolioPage from '../../pages/PortfolioPage';
import AboutPage from '../../pages/AboutPage';
import useLocalStorage from 'use-local-storage';

const App: FC = () => {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <div className="app" data-theme={theme}>
      <Header />

      <main className={`${styles.app} _container`}>
        <button onClick={switchTheme}>Switch theme</button>
        <Routes>
          <Route path="/" element={<PortfolioPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
