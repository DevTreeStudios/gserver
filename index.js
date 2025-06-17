const express = require('express');
const axios = require('axios');
const app = express();

const PORT = process.env.PORT || 3000;
const TARGET_URL = 'https://www.vulcanvalues.com/grow-a-garden/stock';

app.get('/', async (req, res) => {
  try {
    const response = await axios.get(TARGET_URL);
    res.send(response.data);
  } catch (error) {
    res.status(500).send(`Failed to fetch external HTML: ${error}`);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
