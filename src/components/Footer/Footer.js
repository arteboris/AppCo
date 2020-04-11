import React from 'react';
import css from './Footer.module.css';

const Footer = () => {
  return (
    <div className={css.container_footer}>
      <ul className={css.footer_list}>
        <li className={css.footer_list__logo}>AppCo</li>
        <li>All rights reserved by ThemeTags</li>
        <li>Copyrights © 2019.</li>
      </ul>
    </div>
  );
};

export default Footer;
