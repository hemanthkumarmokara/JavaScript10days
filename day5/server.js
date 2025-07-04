const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');

const app = express();
const port = 5000;

app.use(express.json()); // for parsing JSON

// Connect to MongoDB
mongoose.connect('mongodb://51.105.241.241:27017/userDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ DB error:', err));

// POST route to save a new user
app.post('/users', async (req, res) => {
  const { name, email, age } = req.body;
  try {
    const user = new User({ name, email, age });
    await user.save();
    res.status(201).send(user);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

// GET route to fetch all users
app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});

