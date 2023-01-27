const mongoose = require('mongoose');
require("dotenv").config();

// mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/claireseCeramicsDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;