import React from 'react';
import { sectionInfo } from './constants';
import './MainPage.scss';

export const MainPage = () => {
  return (
    <main className="main-page">
      <h1 className="main-page__header">Welcome to Trali Server Training</h1>
      {sectionInfo.map(info => (
        <section key={info.title} className="main-page__section">
          <div className="section-descr">
            <img
              src={info.imgSrc}
              alt={info.title}
              className="section-descr__image"
            />
            <h3 className="section-descr__title">{info.title}</h3>
          </div>
        </section>
      ))}
    </main>
  );
};
