import React from 'react';
import PropTypes from 'prop-types';
import mobilePhoto from '../../assets/images/mobile.png';
import css from './HomePage.module.css';

const HomePage = ({ history }) => {
  const goToUsersPage = () => history.push('/users');
  return (
    <div className={css.container_header}>
      <div className={css.container_header__content}>
        <div className={css.content_header__text}>
          <h2>AppCo</h2>
          <h1>
            <strong>Brainstorming</strong> for <br /> desired perfect Usability
          </h1>
          <p>
            Our design projects are fresh and simple and will benefit <br />
            your business greatly. Learn more about our work!
          </p>
          <button type="button" onClick={goToUsersPage}>
            View Stats
          </button>
        </div>
        <img
          className={css.content_header__image}
          src={mobilePhoto}
          alt="mobile"
          width="321"
          height="561"
        />
      </div>
    </div>
  );
};

HomePage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default HomePage;
