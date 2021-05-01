import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { PrivateRoute } from '../components/hoc';
import { useLocalStorageChange } from '../hooks';
import {
  LoginPage,
  DashboardPage,
} from '../containers';

const App = () => {
  const [onLocalStorageChange] = useLocalStorageChange();
  const isAuth = useSelector(state => state.auth.isAuth);

  useEffect(() => {
    window.addEventListener('storage', onLocalStorageChange)
    return () => {
      window.removeEventListener('storage', onLocalStorageChange)
    }
  }, [onLocalStorageChange]);
  
  return (
    <Switch>
      <Redirect exact from='/' to='/dashboard'/>
      <Route path="/login" render={() => (isAuth ? <Redirect to='/dashboard' /> : <LoginPage />)} />
      <PrivateRoute path="/dashboard" exact component={DashboardPage} isAuth={isAuth} />
    </Switch>
  );
};

export default withRouter(App);
