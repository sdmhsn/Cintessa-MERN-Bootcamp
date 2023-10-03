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

// handling POST request to a root path ('/')
app.post('/', (req, res) => {
  const data = {
    method: 'POST',
  };

  res.send(data);
});

// handling PUT request to a root path ('/')
app.put('/', (req, res) => {
  const data = {
    method: 'PUT',
  };

  res.send(data);
});

app.listen(port, () => {
  console.log(`Server running in port: ${port}`);
});
