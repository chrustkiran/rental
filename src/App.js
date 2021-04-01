import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import {Home} from "./features/home/Home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home />
      </header>
    </div>
  );
}

export default App;
