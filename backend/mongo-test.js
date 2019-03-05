// import the mongoose module
var mongoose = require('mongoose')

//set up default mongoose connetion
var mongoDB = 'mongodb://127.0.0.1/27017';
mongoose.connect(mongoDB, {userNewUrlParser: true});
// get mongoose to use the global promise library
mongoose.Promise = global.Promise;

// get default connection
var db = mongoose.connection;

// bind connection to error event (to get notiification of connection)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));