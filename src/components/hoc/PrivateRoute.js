import React from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isAuth, ...props }) => {
  return (
    <Route {...props} render={
      props => (
        isAuth ?
          <Component {...props} /> :
          <Redirect to={'/login'} />
      )}
    />
  );
};

export default withRouter(PrivateRoute);
