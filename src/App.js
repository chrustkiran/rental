import React from 'react';
import 'antd/dist/antd.css';
import CustomRouter from "./features/router/Router";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CustomRouter />
      </header>
    </div>
  );
}

export default App;
