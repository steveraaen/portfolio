import React, { Component } from 'react';
import Intro from './components/Intro.js'
import Connections from './components/Connections.js'
import './App.css';


class App extends Component {

  render() {
    return (
      <div className="App">
          <div >
            <Intro />
          </div>
          	<Connections />
      </div>
    );
  }
}

export default App;
