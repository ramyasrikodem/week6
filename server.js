var express = require("express")
var app = express()
var port = process.env.port || 8080
const routes = require('./routes/routes')
const mongoose = require('mongoose');
// Middleware
app.use(express.static(__dirname + '/public'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
mongoose.connect('mongodb://localhost:27017/myprojectDB', {
useNewUrlParser: true,
useUnifiedTopology: true,
});
mongoose.connection.on('connected', () => {
console.log('Connected to MongoDB');
});
// 2. Define your schema and model
  app.use("/",routes)  
app.get("/", async (req, res) => {
    app.use(express.static(__dirname + '/public','index.html'));
});
// 4. Start server
app.listen(port, () => {
console.log(`App listening on port ${port}`);
});
