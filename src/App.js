import React from "react";
import logo from "./assets/images/logo.svg";
const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="logo"></img>
        <p>
          Edit <code>src/App.js</code> and save to reload
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank">
          Learn React
        </a>
      </header>
    </div>
  );
};
export default App;
