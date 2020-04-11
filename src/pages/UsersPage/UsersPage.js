/* eslint-disable react/no-did-update-set-state */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import Users from '../../components/Users/Users';
import Pagination from '../../components/Pagination/Pagination';
import Footer from '../../components/Footer/Footer';
import data from '../../db/data.json';
import css from './UsersPage.module.css';

class UsersPage extends Component {
  state = {
    users: [],
    page: 1,
    limit: 50,
  };

  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func,
    }).isRequired,
  };

  componentDidMount() {
    const { limit, page } = this.state;
    const users = this.getUsers(limit, page);
    this.setState({ users });
  }

  componentDidUpdate(prevProps, prevState) {
    const { page, limit } = this.state;
    if (prevState.page !== page) {
      const users = this.getUsers(limit, page);
      this.setState({ users });
    }
  }

  getUsers = (limit, page) => {
    const indexOfLastUser = page * limit;
    const indexOfFirstUser = indexOfLastUser - limit;
    return data.slice(indexOfFirstUser, indexOfLastUser);
  };

  handleChangePage = number => {
    this.setState({ page: number });
  };

  handleNextPage = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  handlePrevPage = () => {
    this.setState(prevState => ({
      page: prevState.page - 1,
    }));
  };

  render() {
    const { users, limit, page } = this.state;
    const { history } = this.props;
    return (
      <>
        <Header />
        <div className={css.container_usersPage}>
          <Navigation />
          <h1>Users statistics</h1>
          <Users users={users} history={history} />
          <Pagination
            totalPage={Math.ceil(data.length / limit)}
            handleChangePage={this.handleChangePage}
            page={page}
            handleNextPage={this.handleNextPage}
            handlePrevPage={this.handlePrevPage}
          />
        </div>
        <Footer />
      </>
    );
  }
}

export default UsersPage;
