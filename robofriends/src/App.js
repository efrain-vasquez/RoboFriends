//here react is being distructured and we are impoting the component
import React, { Component } from 'react';
//import logo
import logo from './logo.svg';
//
import './App.css';
//
class App extends Component {//creating a class and its the child of component. Component (superclass) creates component (class)
  render() {//this funcction renders because a component has to render. it renders whatever its returning
    return (//returns (jsx) HTML piece of the website
      <div className="App">//
        <header className="App-header">//
          <img src={logo} className="App-logo" alt="logo" />//
          <p>//
            Edit <code>src/App.js</code> and save to reload.//
          </p>//
          <a//
            className="App-link"//
            href="https://reactjs.org"//
            target="_blank"//
            rel="noopener noreferrer"//
          >//
            Learn React//
          </a>//
        </header>//
      </div>//
    );//
  }//
}//

export default App;//
