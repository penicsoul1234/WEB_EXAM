import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Content from './page.component'
import { BrowserRouter,Switch, Route, NavLink } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p> 57021476  นายกฤษฎา ปัญญาวุฒิ</p>
      <BrowserRouter>
        <NavLink to="page" activeClassName="active">Page</NavLink>
        
      </BrowserRouter>
      </div>
    );
  }
}


export default App;
