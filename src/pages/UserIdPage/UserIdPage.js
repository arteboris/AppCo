/* eslint-disable no-shadow */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
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
    startDate: new Date('2019/10/14'),
    endDate: new Date('2019/10/20'),
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
    const { startDate, endDate } = this.state;
    const { match, userStats } = this.props;
    const id = Number(match.params.id);
    const period = `${moment(startDate).format('YYYY-MM-DD')},${moment(
      endDate,
    ).format('YYYY-MM-DD')}`;
    userStats(id, period);
  }

  handleChangeStartDate = date => {
    this.setState({
      startDate: date,
    });
  };

  handleChangeEndDate = date => {
    this.setState({
      endDate: date,
    });
  };

  handleChange = () => {
    const { startDate, endDate } = this.state;
    const period = `${moment(startDate).format('YYYY-MM-DD')},${moment(
      endDate,
    ).format('YYYY-MM-DD')}`;
    const { match, userStats } = this.props;
    const id = Number(match.params.id);
    userStats(id, period);
  };

  render() {
    const { fullName, dates, clicks, views } = this.props;
    const { startDate, endDate } = this.state;
    return (
      <>
        <Header />
        <div className={css.userPageId_container}>
          <Navigation user={fullName} />
          <div className={css.title_datePicker}>
            <h1 className={css.title_userIdPage}>{fullName}</h1>
            <div className={css.datePicker_button}>
              <div className={css.div_dataPicker}>
                <DatePicker
                  className={css.dataPicker}
                  selected={startDate}
                  onChange={this.handleChangeStartDate}
                  dateFormat="dd/MM/yyyy"
                  startDate={startDate}
                  endDate={endDate}
                  maxDate={endDate}
                />
                <DatePicker
                  className={css.dataPicker}
                  selected={endDate}
                  onChange={this.handleChangeEndDate}
                  dateFormat="dd/MM/yyyy"
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                />
              </div>
              <button
                onClick={this.handleChange}
                className={css.button_choosePeriod}
                type="button"
              >
                Choose period
              </button>
            </div>
          </div>
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
