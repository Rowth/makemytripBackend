const mongoose = require("mongoose");

require("dotenv").config();

const connect = () => {
  return mongoose.connect("mongodb+srv://komalbansal:123komal@user1.dorou17.mongodb.net/?retryWrites=true&w=majority");
};

module.exports = connect;
