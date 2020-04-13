import React from 'react';
import PropTypes from 'prop-types';
import mobileImg from '../../assets/images/mobile.png';
import cleanImg from '../../assets/images/clean.png';
import secureImg from '../../assets/images/secure.png';
import retinaImg from '../../assets/images/retina.png';
import macbookImg from '../../assets/images/macbook.png';
import basicImg from '../../assets/images/basic.png';
import standartImg from '../../assets/images/standart.png';
import unlimitedImg from '../../assets/images/unlimited.png';
import css from './HomePage.module.css';

const HomePage = ({ history }) => {
  const goToUsersPage = () => history.push('/users');
  return (
    <>
      <header className={css.container_header}>
        <div className={css.container_header__content}>
          <div className={css.content_header__text}>
            <h2>AppCo</h2>
            <h1>
              <strong>Brainstorming</strong> for <br /> desired perfect
              Usability
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
            src={mobileImg}
            alt="mobile"
            width="321"
            height="561"
          />
        </div>
      </header>
      <main className={css.main_container}>
        <section className={css.design_section}>
          <h2>
            Why{' '}
            <b>
              small business owners <br /> love{' '}
            </b>
            AppCo?
          </h2>
          <p>
            Our design projects are fresh and simple and will benefit your
            business <br /> greatly. Learn more about our work!
          </p>
          <ul className={css.design_list}>
            <li>
              <button type="button">
                <img
                  src={cleanImg}
                  alt="Clean Design"
                  width="106"
                  height="96"
                />
                <h5>Clean Design</h5>
                <p>
                  Increase sales by showing true <br /> dynamics of your
                  website.
                </p>
              </button>
            </li>
            <li>
              <button type="button">
                <img
                  src={secureImg}
                  alt="Secure Data"
                  width="106"
                  height="96"
                />
                <h5>Secure Data</h5>
                <p>
                  Build your online store’s trust using <br /> Social Proof &
                  Urgency.
                </p>
              </button>
            </li>
            <li>
              <button type="button">
                <img
                  src={retinaImg}
                  alt="Retina Ready"
                  width="106"
                  height="96"
                />
                <h5>Retina Ready</h5>
                <p>
                  Realize importance of social proof in <br /> customer’s
                  purchase decision.
                </p>
              </button>
            </li>
          </ul>
        </section>
        <section className={css.managing_section}>
          <div className={css.managing_section__content}>
            <h5>
              Start Managing your apps <br /> business, more faster
            </h5>
            <p>
              Objectively deliver professional value with diverse web-readiness
              <br /> Collaboratively transition wireless customer service
              without <br /> goal-oriented catalysts for change.
              Collaboratively.
            </p>
            <button type="button">Learn more</button>
            <img src={macbookImg} alt="macbook" width="690" height="456" />
          </div>
        </section>
        <section className={css.packages_section}>
          <div className={css.packages_section__content}>
            <h2>
              <strong> Afforadble Pricing and Packages </strong> <br /> choose
              your best one
            </h2>
            <p>
              Monotonectally grow strategic process improvements vis-a-vis
              <br /> integrated resources.
            </p>
            <ul className={css.packages_section__list}>
              <li>
                <h5>Basic</h5>
                <img src={basicImg} alt="basicImg" width="210" height="122" />
                <h6>$29</h6>
                <p>
                  Push Notifications Data Transfer SQL Database Search & SEO
                  Analytics 24/7 Phone Support 2 months technical support 2+
                  profitable keyword
                </p>
                <button type="button">Purchase now</button>
              </li>
              <li>
                <h5>Standard</h5>
                <img
                  src={standartImg}
                  alt="standartImg"
                  width="210"
                  height="122"
                />
                <h6>$149</h6>
                <p>
                  Push Notifications Data Transfer SQL Database Search & SEO
                  Analytics 24/7 Phone Support 2 months technical support 2+
                  profitable keyword
                </p>
                <button type="button">Purchase now</button>
              </li>
              <li>
                <h5>Unlimited</h5>
                <img
                  src={unlimitedImg}
                  alt="unlimitedImg"
                  width="210"
                  height="122"
                />
                <h6>$39</h6>
                <p>
                  Push Notifications Data Transfer SQL Database Search & SEO
                  Analytics 24/7 Phone Support 2 months technical support 2+
                  profitable keyword
                </p>
                <button type="button">Purchase now</button>
              </li>
            </ul>
            <h4 className={css.packages_section__contact}>
              If you need custom services or Need more? <span>Contact us</span>
            </h4>
          </div>
        </section>
      </main>
      <footer className={css.footer}>
        <div className={css.footer_container}>
          <div className={css.footer_input}>
            <p>Enter your email</p>
            <button type="button">Subscribe</button>
          </div>
          <ul className={css.footer_list}>
            <li className={css.footer_list__logo}>AppCo</li>
            <li>All rights reserved by ThemeTags</li>
            <li>Copyrights © 2019.</li>
          </ul>
        </div>
      </footer>
    </>
  );
};

HomePage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default HomePage;
