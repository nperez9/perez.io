import React, { Suspense } from 'react';
import './translator.js';
import './index.css';
import './App.css';
import Hello from './components/Hello';
import Lenguage from './components/LenguagePicker';

function App() {
  return (
    <div className="App">
      <Suspense fallback={null}>
        <Hello />
        <Lenguage />
      </Suspense>
    </div>
  );
}

export default App;
