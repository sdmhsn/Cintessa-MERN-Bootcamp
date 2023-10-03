const express = require('express');
const app = express();
const port = 3000;

// handling GET request to a root path ('/')
app.get('/', (req, res) => {
  // res.send('Hai! Welcome to Home page');
  const data = {
    method: 'GET',
  };

  res.send(data);
});

app.listen(port, () => {
  console.log(`Server running in port: ${port}`);
});
