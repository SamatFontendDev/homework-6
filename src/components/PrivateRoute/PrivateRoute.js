import React, { Component } from 'react';
import { withAuth } from '../../context/Auth';
import { Route, Redirect } from 'react-router-dom';


class PrivateRoute extends Component {
  // Реализуйте приватный роут.
  // Он должен проверять статус авторизации
  // и перенаправлять пользователя на страницу логина,
  // если тот не авторизован.

  render() {
    const { path, component, isAuthorized } = this.props;
    
    return isAuthorized ? (
      <Route
        path={path}
        component={component}
        />
    ) : (
      <Redirect to="/login" />
    );
  }
}



export default withAuth(PrivateRoute);