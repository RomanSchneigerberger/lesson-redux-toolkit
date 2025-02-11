import React from 'react';
import './app.scss';
import Counter from './countetr/Counter';
import ShowCounter from './countetr/ShowCounter'

const App = () => {
  return (
    <div>
      Hello World
      <hr />
      <Counter/>
      <ShowCounter/>
    </div>
  );
};

export default App;