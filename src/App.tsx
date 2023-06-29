import React from 'react';
import MenuBar from './components/MenuBar/menuBar';
import Home from './pages/Home';
import './main.scss';
import './App.css';

function App() {
  return (
    <div className="App">

      <MenuBar></MenuBar>
      <Home></Home>
      
    </div>
  );
}

export default App;
