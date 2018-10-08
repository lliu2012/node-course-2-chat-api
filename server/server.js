const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
const app = express();
app.use(express.static(publicPath));

app.get('/', (req, res) => {
  console.log(req);
  res.send(req);
});

app.listen(port, () => {
  console.log(`server on port: ${port}`);
});
