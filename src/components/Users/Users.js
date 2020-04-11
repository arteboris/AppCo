import React, { Component } from 'react';
import PropTypes from 'prop-types';
import statistic from '../../db/users.statistic.json';
import css from './Users.module.css';

class Users extends Component {
  state = {};

  static propTypes = {
    users: PropTypes.arrayOf(PropTypes.object).isRequired,
    history: PropTypes.shape({
      push: PropTypes.func,
    }).isRequired,
  };

  getTotalClicks = userId => {
    return statistic
      .filter(elem => elem.user_id === userId)
      .reduce((acc, el) => {
        return acc + el.clicks;
      }, 0);
  };

  getTotalPageViews = userId => {
    return statistic
      .filter(elem => elem.user_id === userId)
      .reduce((acc, el) => {
        return acc + el.page_views;
      }, 0);
  };

  goToUserPage = userId => {
    const { history } = this.props;
    history.push(`/users/${userId}`);
  };

  render() {
    const { users } = this.props;
    return (
      <div className={css.container_table}>
        <table className={css.table}>
          <thead>
            <tr>
              <th>Id</th>
              <th>First name</th>
              <th>Last name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Ip adress</th>
              <th>Total clicks</th>
              <th>Total page views</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id} onClick={() => this.goToUserPage(user.id)}>
                <td>{user.id}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>{user.ip_address}</td>
                <td>{this.getTotalClicks(user.id)}</td>
                <td>{this.getTotalPageViews(user.id)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Users;
