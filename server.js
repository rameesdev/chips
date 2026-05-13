const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the public directory
app.use('/assets', express.static(path.join(__dirname, 'public', 'assets')));

// Serve index.html for all routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`🍌 CM Palahara Kada website running at http://localhost:${PORT}`);
  });
}

module.exports = app;
