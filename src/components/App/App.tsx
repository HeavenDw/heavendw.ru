import React, { FC } from 'react';
import styles from './App.module.css';
import Header from '../Header/Header';
import { Route, Routes } from 'react-router-dom';
import PortfolioPage from '../../pages/PortfolioPage';
import AboutPage from '../../pages/AboutPage';

const App: FC = () => {
  return (
    <main>
      <div className={`${styles.app} _container`}>
        <Header />
        <Routes>
          <Route path="/" element={<PortfolioPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </main>
  );
};

export default App;
