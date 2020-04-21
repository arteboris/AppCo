import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Users.module.css';

class Users extends Component {
  state = {};

  static propTypes = {
    page: PropTypes.number.isRequired,
    limit: PropTypes.number.isRequired,
    getUsersPaginate: PropTypes.func.isRequired,
    users: PropTypes.arrayOf(PropTypes.object).isRequired,
    history: PropTypes.shape({
      push: PropTypes.func,
    }).isRequired,
  };

  componentDidMount() {
    const { page, limit, getUsersPaginate } = this.props;
    getUsersPaginate(page, limit);
  }

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
                <td>{user.clicks}</td>
                <td>{user.page_views}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Users;
