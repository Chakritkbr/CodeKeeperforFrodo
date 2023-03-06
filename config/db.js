const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

mongoose.set('strictQuery', true);

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
    });

    console.log('MONGO CONNECTED !!!!');
  } catch (err) {
    console.log('ERR Something Wrong !!!');
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
