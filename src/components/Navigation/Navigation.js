/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

const Navigation = ({ user }) => {
  return (
    <ul className={css.nav_menu}>
      <li>
        <NavLink
          to="/"
          exact
          className={css.nav_link}
          activeClassName={css.activeStyle}
        >
          Main Page
        </NavLink>
      </li>
      <li className={css.nav_link}> {`>`} </li>
      <li>
        <NavLink
          to="/users"
          exact
          className={css.nav_link}
          activeClassName={css.activeStyle}
        >
          Users statistics
        </NavLink>
      </li>
      {user && (
        <>
          <li className={css.nav_link}> {`>`} </li>
          <li className={css.nav_link__user}>{user}</li>
        </>
      )}
    </ul>
  );
};

Navigation.propTypes = {
  user: PropTypes.string,
};

export default Navigation;
