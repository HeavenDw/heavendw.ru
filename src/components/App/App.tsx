import React, { FC, useEffect } from 'react';
import styles from './App.module.css';
import Header from '../Header/Header';
import { Route, Routes } from 'react-router-dom';
import PortfolioPage from '../../pages/PortfolioPage';
import AboutPage from '../../pages/AboutPage';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeTheme } from '../../redux/Slices/themeSlice';
import ContactsPage from '../../pages/ContactsPage';

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
    </div>
  );
};

export default App;
