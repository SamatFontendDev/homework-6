import React, { Component } from 'react';
import { withAuth } from '../../context/Auth';
import { Route, Redirect } from 'react-router-dom';
import LoginForm from '../LoginForm';

// class PrivateRoute extends Component {
//   // Реализуйте приватный роут.
//   // Он должен проверять статус авторизации
//   // и перенаправлять пользователя на страницу логина,
//   // если тот не авторизован.
//   render() {
//     return <Route
       
//     />
//   }
// }

var PrivateRoute = ({
  component: RouteComponent,
  isAutorized,
  loginPath,
  ...rest
}) => (
  <Route
  {...rest}
  render={routeProps =>
    isAutorized ? (
      <RouteComponent {...routeProps} />
      ) : (
      <Redirect to="/" />
     )
  }
  />
)

export default withAuth(PrivateRoute);