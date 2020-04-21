/* eslint-disable no-shadow */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import Clicks from '../../components/Clicks/Clicks';
import Views from '../../components/Views/Views';
import { userStats } from '../../redux/userId/userIdOperations';
import {
  fullName,
  dates,
  clicks,
  views,
} from '../../redux/userId/userIdSelektors';
import Footer from '../../components/Footer/Footer';
import css from './UserIdPage.module.css';

class UserIdPage extends Component {
  state = {
    period: '2019-10-14,2019-10-20',
  };

  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.object,
    }).isRequired,
    userStats: PropTypes.func.isRequired,
    fullName: PropTypes.string.isRequired,
    dates: PropTypes.arrayOf(String).isRequired,
    clicks: PropTypes.arrayOf(Number).isRequired,
    views: PropTypes.arrayOf(Number).isRequired,
  };

  componentDidMount() {
    const { period } = this.state;
    const { match, userStats } = this.props;
    const id = Number(match.params.id);
    userStats(id, period);
  }

  render() {
    const { fullName, dates, clicks, views } = this.props;
    return (
      <>
        <Header />
        <div className={css.userPageId_container}>
          <Navigation user={fullName} />
          <h1 className={css.title_userIdPage}>{fullName}</h1>
          <Clicks date={dates} clicks={clicks} />
          <Views date={dates} views={views} />
        </div>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = state => ({
  fullName: fullName(state),
  dates: dates(state),
  clicks: clicks(state),
  views: views(state),
});

const mapDispatchToProps = {
  userStats,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserIdPage);
