
require("dotenv").config();
const express = require("express");
const connDB = require("./db/conn")
const app = express();
const port = process.env.PORT || 8000;
const prodRoutes = require("./routes/products")

// routing
app.use("/api/v1/mantras",prodRoutes)

// comman route
app.get('/', (req, res) => {
    res.status(200).json({ message: "It's Live", success: true });
})
app.get('*', (req, res) => {
    res.status(200).json({ message: "404 Not Found!!", success: false });
})

const start = async () => {
    try {
        await connDB(process.env.MONGODB_URI);
        app.listen(port, () => console.log(">> Server On"));
    } catch (err) {
        console.log(err);
    }
}

start()