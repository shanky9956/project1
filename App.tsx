
import React from 'react';
import Calculator from './components/Calculator';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Advanced Scientific Calculator</h1>
        <p>Perform basic arithmetic and complex mathematical functions</p>
      </header>
      <main className="app-main">
        <Calculator />
      </main>
      <footer className="app-footer">
        <p>Keyboard shortcuts: Numbers (0-9), Operators (+, -, *, /), Enter (=), Escape (Clear)</p>
      </footer>
    </div>
  );
}

export default App;
