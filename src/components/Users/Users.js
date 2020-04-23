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
    sortUsers: PropTypes.func.isRequired,
    sort: PropTypes.string.isRequired,
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
    const { users, sortUsers, sort } = this.props;
    return (
      <div className={css.container_table}>
        <table className={css.table}>
          <thead>
            <tr>
              <th>Id</th>
              <th>First name</th>
              <th>
                <div className={css.containerTitle}>
                  <div>Last name</div>
                  <div className={css.containerTitle_btn}>
                    <button
                      disabled={sort === 'last_name=ascending'}
                      className={css.sort_btn}
                      type="submit"
                      onClick={() => sortUsers('last_name=ascending')}
                    >
                      ▲
                    </button>
                    <button
                      disabled={sort === 'last_name=descending'}
                      className={css.sort_btn}
                      type="button"
                      onClick={() => sortUsers('last_name=descending')}
                    >
                      ▼
                    </button>
                  </div>
                </div>
              </th>
              <th>Email</th>
              <th>Gender</th>
              <th>Ip adress</th>
              <th>
                <div className={css.containerTitle}>
                  <div>Total clicks</div>
                  <div className={css.containerTitle_btn}>
                    <button
                      className={css.sort_btn}
                      disabled={sort === 'clicks=ascending'}
                      type="button"
                      onClick={() => sortUsers('clicks=ascending')}
                    >
                      ▲
                    </button>
                    <button
                      className={css.sort_btn}
                      disabled={sort === 'clicks=descending'}
                      type="button"
                      onClick={() => sortUsers('clicks=descending')}
                    >
                      ▼
                    </button>
                  </div>
                </div>
              </th>
              <th>
                <div className={css.containerTitle}>
                  <div>Total page views</div>
                  <div className={css.containerTitle_btn}>
                    <button
                      className={css.sort_btn}
                      disabled={sort === 'page_views=ascending'}
                      type="button"
                      onClick={() => sortUsers('page_views=ascending')}
                    >
                      ▲
                    </button>
                    <button
                      className={css.sort_btn}
                      disabled={sort === 'page_views=descending'}
                      type="button"
                      onClick={() => sortUsers('page_views=descending')}
                    >
                      ▼
                    </button>
                  </div>
                </div>
              </th>
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
