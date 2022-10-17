import React, { FC, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import styles from './App.module.scss';
import Header from '../Header/Header';
import PortfolioPage from '../../pages/PortfolioPage';
import AboutPage from '../../pages/AboutPage';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeTheme } from '../../redux/Slices/themeSlice';
import ContactsPage from '../../pages/ContactsPage';
import Footer from '../Footer/Footer';

const App: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const themeFromLS = localStorage.getItem('theme');
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (!themeFromLS) {
      if (defaultDark) {
        localStorage.setItem('theme', 'dark');
        dispatch(changeTheme('dark'));
      } else {
        localStorage.setItem('theme', 'light');
        dispatch(changeTheme('light'));
      }
    } else {
      dispatch(changeTheme(themeFromLS));
    }
  }, []);

  const theme = useAppSelector((state) => state.themeSlice.theme);

  return (
    <div className="app" data-theme={theme}>
      <Header />

      <main className={`${styles.app} _container main`}>
        <Routes>
          <Route path="/" element={<PortfolioPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
