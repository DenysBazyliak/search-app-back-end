const DATA = require("./data")
const express = require('express');
const cors =require("cors")
const app = express();

app.use(cors())

app.get('/articles', (req, res) => {
      res.json(DATA);
});
app.get('/article/:id', (req, res) => {
    res.json(DATA.find(article=>article.id=== req.params.id))
});
app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
