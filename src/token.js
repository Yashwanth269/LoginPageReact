const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.json());

const users = [
  {
    username: 'dummy.dummy@dummy.com',
    password: '12345678',
  },
];

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find((u) => u.username === username && u.password === password);

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });

  res.json({ token });
});

app.listen(3001, () => {
  console.log('Server is running on port 3000');
});
