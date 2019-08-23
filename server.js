const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 4000

const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build','index.html'));
})



app.listen(PORT, () => {
  console.log(`Listening on PORT:${PORT}`)
})