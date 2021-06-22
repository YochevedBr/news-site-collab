const express = require('express');
const connectDB = require('./db.js');
const cors = require('cors');
const {port} = require('./config');

require('./models/User');
require('./models/Article');
require('./models/Comment');

const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));
app.use(express.json());

connectDB();

app.use('/api/users', require('./routes/api/users'));
app.use('/api/articles', require('./routes/api/articles'));

app.listen(port, ()=> {
  console.log(`Server started on port ${port}`);
});

