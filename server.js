var express = require("express");
var app = express();
var port = process.env.port || 8080;
const routes = require('./routes/routes');
const mongoose = require('mongoose');

// Middleware
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/myprojectDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

// Calculator routes — keep them above custom routes
app.get('/add', (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  if (isNaN(a) || isNaN(b)) {
    return res.status(400).send("Invalid input");
  }
  const sum = a + b;
  res.send(`The sum of ${a} and ${b} is: ${sum}`);
});

app.get('/subtract', (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  if (isNaN(a) || isNaN(b)) {
    return res.status(400).send("Invalid input");
  }
  const difference = a - b;
  res.send(`The difference of ${a} and ${b} is: ${difference}`);
});

app.get('/multiply', (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  if (isNaN(a) || isNaN(b)) {
    return res.status(400).send("Invalid input");
  }
  const product = a * b;
  res.send(`The product of ${a} and ${b} is: ${product}`);
});

app.get('/divide', (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  if (isNaN(a) || isNaN(b)) {
    return res.status(400).send("Invalid input");
  }
  if (b === 0) {
    return res.status(400).send("Cannot divide by zero");
  }
  const quotient = a / b;
  res.send(`The quotient of ${a} and ${b} is: ${quotient}`);
});

// Custom routes — keep this below
app.use("/", routes);

// Start server
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
