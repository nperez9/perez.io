import React, { Suspense } from 'react';

import './translator.js';
import Router from './components/Router';
import Layout from './components/core/Layout';

function App() {
  return (
    <div className="App">
      <Suspense fallback={null}>
        <Layout>
          <Router />
        </Layout>
      </Suspense>
    </div>
  );
}

export default App;
