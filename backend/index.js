require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express()
const port = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use(cors());

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  app.get('/', (req, res) => {
    res.send('Veggify Recipe App Server is running');
  });
}

main().then(() => console.log('MongoDB Connected Successfully')).catch(err => console.log(err));

// routes
const ItemRoutes = require('./src/routes/itemRoute');

app.use('/api', ItemRoutes);

app.listen(port, () => {
  console.log(`This port is running on ${port} port`)
})
