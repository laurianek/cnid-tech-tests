/**
 * Main mobile app using react
 * main children:  Header, Tabs
 */

import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import Listing from './components/listing';
import Article from './components/article';

class App extends Component{

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <header>
          <nav className="nav">
            <a className="nav-link active" href="#">Active</a>
            <a className="nav-link" href="#">Link</a>
            <a className="nav-link" href="#">Link</a>
          </nav>
        </header>

        {this.props.children}

        <footer>
          Hello World Copyrighting :)
        </footer>

      </div>
    );
  }

}

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Listing}></IndexRoute>
      <Route path="article/:id" component={Article}/>
    </Route>
  </Router>
), document.getElementById('reactApp'));
