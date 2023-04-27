const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:admin@cluster0.uahqfv5.mongodb.net/?retryWrites=true&w=majority')
  .then(() => console.log('Connected!'));