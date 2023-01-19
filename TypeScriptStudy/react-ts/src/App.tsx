import React from 'react';
import * as D from './data';

function App() {
  return (
    <>
      {D.randomName()}, {D.randomJobTitle()}, {D.randomDayMonthYear()}
    </>
  );
}

export default App;
