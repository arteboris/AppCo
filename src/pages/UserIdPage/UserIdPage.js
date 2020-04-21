import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
// import Navigation from '../../components/Navigation/Navigation';
// import Clicks from '../../components/Clicks/Clicks';
// import Views from '../../components/Views/Views';
// import { getUserIdStatistic } from '../../services/api';
import Footer from '../../components/Footer/Footer';
import css from './UserIdPage.module.css';

class UserIdPage extends Component {
  // state = {
  //   period: '2019-10-14,2019-10-20',
  // };

  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.object,
    }).isRequired,
  };

  // componentDidMount() {
  //   const { period } = this.state;
  //   const id = this.userId();
  //   // getUserIdStatistic(id, period)
  //   //   .then(response => console.log(response))
  //   //   .catch(error => console.log(error));
  // }

  userId = () => {
    const { match } = this.props;
    return Number(match.params.id);
  };

  render() {
    // const { user, date, clicks, views } = this.state;
    return (
      <>
        <Header />
        <div className={css.userPageId_container}>
          {/* <Navigation user={user} />
          <h1 className={css.title_userIdPage}>{user}</h1>
          <Clicks date={date} clicks={clicks} />
          <Views date={date} views={views} /> */}
        </div>
        <Footer />
      </>
    );
  }
}

export default UserIdPage;
