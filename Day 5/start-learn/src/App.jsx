import React, { useState } from 'react';

import Button from './components/Button';
import Text from './components/Text';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Click me!</button>

      <Text>{count}</Text>
    </>
  );
};

export default App;
