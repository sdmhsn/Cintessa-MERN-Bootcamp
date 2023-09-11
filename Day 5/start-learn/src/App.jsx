import React, { useState, useEffect } from 'react';

import Button from './components/Button';
import Text from './components/Text';

const App = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const increment2 = () => {
    setCount2(count2 + 1);
  };

  useEffect(() => {
    console.log('effect');
  }, []); // only run once

  return (
    <>
      <button onClick={increment}>Click me!</button>
      <p>Counter P: {count}</p>
      <button onClick={increment2}>Click me 2!</button>
      <p>Counter P2: {count2}</p>
      <Text></Text>
    </>
  );
};

export default App;
