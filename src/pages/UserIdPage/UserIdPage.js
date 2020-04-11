import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import Clicks from '../../components/Clicks/Clicks';
import Views from '../../components/Views/Views';
import Footer from '../../components/Footer/Footer';
import data from '../../db/data.json';
import statistic from '../../db/users.statistic.json';
import css from './UserIdPage.module.css';

class UserIdPage extends Component {
  state = {
    user: '',
    clicks: [],
    date: [],
    views: [],
  };

  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.object,
    }).isRequired,
  };

  componentDidMount() {
    const { match } = this.props;
    const userId = Number(match.params.id);
    const user = this.getFindUser(userId);
    const date = this.getFindUserDate(userId);
    const clicks = this.getFindUserClicks(userId);
    const views = this.getFindUserViews(userId);
    this.setState({ user, date, clicks, views });
  }

  getFindUser = userId => {
    const findUser = data.find(user => user.id === userId);
    return `${findUser.first_name} ${findUser.last_name}`;
  };

  getFindUserDate = userId =>
    statistic.filter(el => el.user_id === userId).map(e => e.date);

  getFindUserClicks = userId =>
    statistic.filter(el => el.user_id === userId).map(e => e.clicks);

  getFindUserViews = userId =>
    statistic.filter(el => el.user_id === userId).map(e => e.page_views);

  render() {
    const { user, date, clicks, views } = this.state;
    return (
      <>
        <Header />
        <div className={css.userPageId_container}>
          <Navigation user={user} />
          <h1 className={css.title_userIdPage}>{user}</h1>
          <Clicks date={date} clicks={clicks} />
          <Views date={date} views={views} />
        </div>
        <Footer />
      </>
    );
  }
}

export default UserIdPage;
