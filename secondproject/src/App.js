import React, { Component } from 'react';
import './App.css';
import Second from './02'; // Component with Props from Parent.
import Third from './03/app.js';
import Fourth from './04/client/index.js';
// import Fifth from './05';
// import Sixth from './06';
// import Seventh from './07';
// import Eighth from './08';
// import Ninth from './09';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Second blanket={'Blanky'} />
        <Third />
        <Fourth />
        {/*<Fifth />
        <Sixth />
        <Seventh />
        <Eighth />
        <Ninth /> */}
      </div>
    );
  }
}

export default App;
