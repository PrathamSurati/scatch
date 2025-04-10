const mongoose = require('mongoose');
const config = require('config');
const dbugger = require('debug')("development:mongoose");

mongoose
.connect(`${config.get("MONGODB_URI")}/scatch`)
.then(() => {
    dbugger("Connected to MongoDB")
})
.catch((err) => {
    dbugger(err)
});

module.exports = mongoose.connection;