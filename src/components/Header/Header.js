import React from 'react';
import css from './Header.module.css';

const Header = () => {
  return (
    <div className={css.container_header}>
      <div className={css.container_header__title}>
        <h1>AppCo</h1>
      </div>
    </div>
  );
};

export default Header;
