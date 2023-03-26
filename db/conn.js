const mongoose = require("mongoose")

// kC6e4BZOq01XMzfs naveen
// mongodb+srv://naveen:kC6e4BZOq01XMzfs@cluster0.mpu2rc1.mongodb.net/mantraapiretryWrites=true&w=majority



const connDB = (URI) => {
    console.log(">> DB Connected");
    return mongoose.connect(URI);
}

module.exports = connDB;