const express = require('express');
const { connectDatabase } = require('./models');
const dotenv = require('dotenv');
const cors = require('cors');
const routes = require('./routes');

dotenv.config();
connectDatabase();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  res.send('ok');
});
app.use('/api/v1', routes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});

module.exports = app;
