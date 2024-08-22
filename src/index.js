import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById("root"));

// react v18
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// before react 18
//ReactDOM.render(<App/>,document.getElementById("root") )
