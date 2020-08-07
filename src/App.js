import React, { Suspense } from 'react';
import './translator.js';
import Lenguage from './components/LenguagePicker';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App nes-text">
      <Suspense fallback={null}>
        <Home />
        <Lenguage />
      </Suspense>
    </div>
  );
}

export default App;
