require("dotenv").config();
const express = require("express");
const fs = require("fs");
const app = express();
const port = process.env.PORT || 8000;

// Import JSON data from mantra.json
const mantras = JSON.parse(fs.readFileSync("./public/mantra.json", "utf-8"));

// Middleware for parsing JSON
app.use(express.json());

// Route to get all mantras
app.get("/api/v1/mantras", (req, res) => {
    res.status(200).json({ success: true, data: mantras });
});

// Route to get a mantra by name
app.get("/api/v1/mantras/:name", (req, res) => {
    const { name } = req.params;
    const mantra = mantras.find(m => m.name.toLowerCase() === name.toLowerCase());

    if (!mantra) {
        return res.status(404).json({ success: false, message: "Mantra not found" });
    }

    res.status(200).json({ success: true, data: mantra });
});

// Common route
app.get('/', (req, res) => {
    res.status(200).json({ message: "It's Live", success: true });
});

// 404 route
app.get('*', (req, res) => {
    res.status(404).json({ message: "404 Not Found!!", success: false });
});

// Start the server
app.listen(port, () => console.log(`>> Server is running on port ${port}`));