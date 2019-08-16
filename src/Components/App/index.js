import React from 'react';
import Router from '../Router'
import { createStore, applyMiddleware } from 'redux';
import handleSession from '../../store/reducers/reducers'
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { signInUser } from '../../store/actions';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: null
    }
  }


  render() {
    const store = createStore(handleSession, composeWithDevTools(applyMiddleware(thunk)));
    return(

      <article className="Yogi">
        <Provider store={store}>
          <Router>
          </Router>
        </Provider>
      </article> 
    )
  }
}