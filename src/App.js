import React from 'react';

import AppUsingHooks from './AppUsingHooks'
import AppUsingClass from './AppUsingClass'

function App() {
  return (
    <div style={{display: "inline-flex"}}>
      <AppUsingClass />
      <AppUsingHooks />
    </div>
  );
}

export default App;