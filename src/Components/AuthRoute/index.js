import React from 'react';
import {Route, Redirect} from 'react-router-dom';

export default function AuthRoute(props) {
  const {isAuth, component: Component, render: Render, ...routeProps} = props;
  return(<Route {...routeProps} render={(props) => (isAuth) ? <Component {...props} />: <Redirect to="/sessions/new"/>}/>)
}
