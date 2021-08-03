export {}

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27019/blog', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


