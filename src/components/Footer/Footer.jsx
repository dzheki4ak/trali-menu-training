import React from 'react';
import { footerInfo } from './constants';
import './Footer.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer__list">
        {footerInfo.map(info => (
          <li key={info.linkText} className="footer__list-item">
            <a
              className="footer-link"
              href={info.linkHref}
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="footer-link__img"
                src={info.linkImageSrc}
                alt={info.linkText}
              />
              <span className="footer-link__text">{info.linkText}</span>
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
};
