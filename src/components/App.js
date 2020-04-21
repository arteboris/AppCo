import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import UsersPage from '../pages/UsersPage/UsersPage';
import UserIdPage from '../pages/UserIdPage/UserIdPage';

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/users/:id" component={UserIdPage} />
        <Route path="/users" component={UsersPage} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
