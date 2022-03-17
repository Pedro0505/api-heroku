const express = require("express");
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 3001

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Server is working' })
});

app.listen(PORT, () => console.log('Online'))
