import React from 'react';
import Router from '../Router'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loggedIn: null
    }
  }

  render() {
    return(
      <article className="Yogi">
        <Router>
        </Router>
      </article> 
    )
  }
}