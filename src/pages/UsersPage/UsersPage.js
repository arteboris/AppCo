/* eslint-disable no-shadow */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Select from 'react-select';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import Users from '../../components/Users/UsersContainer';
import Pagination from '../../components/Pagination/PaginationContainer';
import Footer from '../../components/Footer/Footer';
import { changeLimit } from '../../redux/users/usersOperations';
import { limit } from '../../redux/users/usersSelectors';
import css from './UsersPage.module.css';

const options = [
  { value: 25, label: 25 },
  { value: 50, label: 50 },
  { value: 75, label: 75 },
  { value: 100, label: 100 },
];

class UsersPage extends Component {
  state = {
    select: { value: 50, label: 50 },
  };

  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func,
    }).isRequired,
    changeLimit: PropTypes.func.isRequired,
    limit: PropTypes.number.isRequired,
  };

  componentDidMount() {
    const { limit } = this.props;
    this.setState({
      select: { value: limit, label: limit },
    });
  }

  handleChange = select => {
    const { changeLimit } = this.props;
    this.setState({ select });
    const limit = select.value;
    changeLimit(limit);
  };

  render() {
    const { select } = this.state;
    const { history } = this.props;
    return (
      <>
        <Header />
        <div className={css.container_usersPage}>
          <Navigation />
          <div className={css.container_text__select}>
            <h1>Users statistics</h1>
            <div className={css.form_select}>
              <Select
                value={select}
                onChange={this.handleChange}
                options={options}
              />
            </div>
          </div>
          <Users history={history} />
          <Pagination />
        </div>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = state => ({
  limit: limit(state),
});

const mapDispatchToProps = {
  changeLimit,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);
