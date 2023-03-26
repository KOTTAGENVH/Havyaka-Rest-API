
require("dotenv").config();
const express = require("express");
const connDB = require("../db/conn")
const app = express();
const port = process.env.PORT || 3000;
const prodRoutes = require("../routes/products")
app.get('/', (req, res) => {
    res.send('op live');
})
app.use("/api/product",prodRoutes)

const start = async () => {
    try {
        await connDB(process.env.MONGODB_URI);
        app.listen(port, () => console.log(">> Server On"));
    } catch (err) {
        console.log(err);
    }
}

start()