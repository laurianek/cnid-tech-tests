/**
 * Main mobile app using react
 * main children:  Header, Tabs
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class App extends Component{

  constructor() {
    super();
  }

  render() {
    return (
      <div>
        Hello World!
      </div>
    );
  }

};


ReactDOM.render(
  <App />,
  document.getElementById('reactApp')
);
