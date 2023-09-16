import React from 'react';
import logo from './logo.svg';
import './App.css';
import TypingComponent from './components/Typing';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="Title">
          Shirley Huang
        </h1>
        <h2
          className="Subtitle"
        >
          i'm a {" "}
          <TypingComponent />
        </h2>
      </header>
    </div>
  );
}

export default App;
