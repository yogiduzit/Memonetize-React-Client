import React from 'react';
import {Route, Redirect} from 'react-router-dom';

export default function AuthRoute(props) {
  const {isAuth, component: Component, ...routeProps} = props;
  if (props.isAuth) {
    return(<Route {...routeProps} component={Component}/>);
  } else {
    return (<Redirect to="/sessions/new"/>);
  }
}
