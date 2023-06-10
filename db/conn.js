const mongoose = require("mongoose")

const connDB = (URI) => {
    console.log(">> DB Connected");
    return mongoose.connect(URI);
}

module.exports = connDB;