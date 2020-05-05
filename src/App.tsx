import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from './firebase.js'; 
import Theorem from './Theorem'; 


class App extends Component {
    public render() {
      const theoremProps = {
        fbKey: "-fndsfnuiwenuwi"
    }
        return (
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Theorem fbKey="-fndsfnuiwenuwi" />
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>
              </header>
            </div>
          );

    }
}

export default App;
