import React from 'react';
import { MainPage } from './pages/MainPage';
import { Footer } from './components/Footer';
// import { Header } from './components/Header';
import './App.scss';

export const App = () => {
  return (
    <>
      {/* <Header /> */}
      <MainPage />
      <Footer />
    </>
  );
};
