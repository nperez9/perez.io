import React, { Suspense } from 'react';

import './translator.js';
import './index.css';
import './normalize.css';
import Router from './components/Router.jsx';
import Layout from './components/Core/Layout.js';

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
