const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 5002;

app.use(express.static('./server/public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log('Now listening on port: ', PORT);
});