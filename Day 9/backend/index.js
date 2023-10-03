const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser'); // body-parser is already in available express

// middleware
app.use(bodyParser.json()); // body-parser middleware

// handling GET request to a root path ('/')
app.get('/', (req, res) => {
  // res.send('Hai! Welcome to Home page');
  // console.log(req);

  const data = {
    method: 'GET',
    body: req.query, // query: { id: '1' },
  };

  res.send(data);
});

// handling POST request to a root path ('/')
app.post('/', (req, res) => {
  //   console.log(req.body);

  const data = {
    method: 'POST',
    body: req.body,
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

// handling DELETE request to a root path ('/')
app.delete('/', (req, res) => {
  const data = {
    method: 'DELETE',
  };

  res.send(data);
});

app.listen(port, () => {
  console.log(`Server running in port: ${port}`);
});
