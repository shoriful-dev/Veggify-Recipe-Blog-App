const express = require('express');
const mongoose = require('mongoose');

const app = express()
const port = process.env.PORT || 5000;

async function main() {
  await mongoose.connect(
    'mongodb+srv://shorifulislam9038:qsgpuJE6H0npKhG0@veggify-recipe-app.mfnurbz.mongodb.net/veggify-recipe-app?retryWrites=true&w=majority&appName=veggify-recipe-app'
  );
  app.get('/', (req, res) => {
    res.send('Veggify Recipe App Server is running');
  });
}

main().then(() => console.log('MongoDB Connected Successfully')).catch(err => console.log(err));

app.listen(port, () => {
  console.log(`This port is running on ${port} port`)
})

// shorifulislam9038
// qsgpuJE6H0npKhG0
// mongodb+srv://shorifulislam9038:qsgpuJE6H0npKhG0@veggify-recipe-app.mfnurbz.mongodb.net/?retryWrites=true&w=majority&appName=veggify-recipe-app
