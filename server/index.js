// main server file.

// dependencies
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
// body parser for incoming requests
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());


// router methods
app.get('/', (req, res) => {
  res.send('Hello World');
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})