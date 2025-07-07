const express = require('express');
const Joi = require('joi');

const app = express();
app.use(express.json());

const userSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required()
});

app.post('/register', (req, res) => {
  const { error } = userSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  res.send("User registered successfully");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

