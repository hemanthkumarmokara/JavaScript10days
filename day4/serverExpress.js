const express = require('express');
const app = express();
const port = 5000;


app.use(express.json());


let users = [
  { id: 1, name: "Hemanth", email: "hemanth@example.com" },
  { id: 2, name: "Raj", email: "raj@example.com" }
];

app.get('/users', (req, res) => {
  res.status(200).json(users);
});


app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json(user);
});


app.post('/users', (req, res) => {
  const { name, email } = req.body;
  const newUser = {
    id: users.length + 1,
    name,
    email
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

app.put('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: 'User not found' });

  const { name, email } = req.body;
  user.name = name || user.name;
  user.email = email || user.email;

  res.json(user);
});


app.delete('/users/:id', (req, res) => {
  const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
  if (userIndex === -1) return res.status(404).json({ error: 'User not found' });

  const deletedUser = users.splice(userIndex, 1);
  res.json(deletedUser[0]);
});


app.listen(port, () => {
  console.log(`running at http://localhost:${port}`);
});

