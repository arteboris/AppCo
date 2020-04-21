import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import Users from '../../components/Users/UsersContainer';
import Pagination from '../../components/Pagination/PaginationContainer';
import Footer from '../../components/Footer/Footer';
import css from './UsersPage.module.css';

class UsersPage extends Component {
  state = {};

  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func,
    }).isRequired,
  };

  // handleNextPage = () => {
  //   this.setState(prevState => ({
  //     page: prevState.page + 1,
  //   }));
  // };

  // handlePrevPage = () => {
  //   this.setState(prevState => ({
  //     page: prevState.page - 1,
  //   }));
  // };

  render() {
    const { history } = this.props;
    return (
      <>
        <Header />
        <div className={css.container_usersPage}>
          <Navigation />
          <h1>Users statistics</h1>
          <Users history={history} />
          <Pagination />
        </div>
        <Footer />
      </>
    );
  }
}

export default UsersPage;
