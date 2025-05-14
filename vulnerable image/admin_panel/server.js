const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/download', (req, res) => {
  res.download(path.join(__dirname, 'public', 'fake-log.txt'));
});

app.listen(port, () => {
  console.log(`Admin Panel running on http://localhost:${port}`);
});
