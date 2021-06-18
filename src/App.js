import React from 'react';

import AppUsingHooks from './AppUsingHooks'
import AppUsingClass from './AppUsingClass'

function App() {
  return (
    <div style={{display: "flex", justifyContent: "center"}}>
      <AppUsingClass />
      <AppUsingHooks />
    </div>
  );
}

export default App;