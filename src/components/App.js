import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import getIsLoading from '../redux/loader/loaderSelectors';
import HomePage from '../pages/HomePage/HomePage';
import UsersPage from '../pages/UsersPage/UsersPage';
import UserIdPage from '../pages/UserIdPage/UserIdPage';

const loaderStyles = {
  position: 'fixed',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  width: '100%',
  zIndex: '10',
};

const App = ({ isLoading }) => {
  return (
    <>
      {isLoading && (
        <Loader
          type="Bars"
          color="#3a80ba"
          height={80}
          width={80}
          style={loaderStyles}
          timeout={0}
        />
      )}
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/users/:id" component={UserIdPage} />
        <Route path="/users" component={UsersPage} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

App.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isLoading: getIsLoading(state),
});

export default connect(mapStateToProps)(App);
