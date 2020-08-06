import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchMovie from './SearchMovie.js'

function App() {
  return (
    <div className="container">
      <h1 className="title">Movie Search</h1>
      <SearchMovie />
    </div>
  );
}

export default App;
