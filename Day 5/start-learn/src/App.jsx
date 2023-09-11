import React, { useState, useEffect } from 'react';

import Button from './components/Button';
import Text from './components/Text';

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log('effect');
  });

  return (
    <>
      <button onClick={increment}>Click me!</button>
      <p>Counter P: {count}</p>
      <Text></Text>
    </>
  );
};

export default App;
