import React, { Component } from 'react';
import './App.css';

class AppUsingClass extends Component {
    render() {
      return (
        <div className="App1">
          <h1>App Using Class</h1>
          <header className="App-header">
            {/* show counter number in below element  */}
            <div>0</div>
          </header>
          <div className="App-body">
            <p>
              Click <code>+</code> or <code>-</code> buttons to change the value in board above
            </p>
            {/* Fill onClick fuctions */}
            <button className="App-button">+</button>
            <button className="App-button">-</button>
            <button className="App-button">Reset</button>
          </div>
        </div>
      );
    }
    
  }

  export default AppUsingClass;