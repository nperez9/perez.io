import React, { Suspense } from 'react';

import './translator.js';
import Router from './components/Router';
import Header from './components/core/Header';
import Footer from './components/core/Footer';

function App() {
  return (
    <div className="App nes-text">
      <Suspense fallback={null}>
        <Header />
        <Router />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
