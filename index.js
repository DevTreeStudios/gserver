const express = require('express');
const axios = require('axios');
const app = express();

const PORT = process.env.PORT || 3000;
const TARGET_URL = 'https://www.vulcanvalues.com/grow-a-garden/stock';

app.get('/', async (req, res) => {
  try {
    const response = await axios.get(TARGET_URL, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml'
      }
    });

    res.send(response.data);
  } catch (error) {
    console.error(error.message);
    res.status(500).send(`Failed to fetch external HTML: ${error}`);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
