require("dotenv").config();
const express = require("express");
const fs = require("fs/promises");
const path = require("path");
const app = express();
const port = process.env.PORT || 8000;

// Middleware for parsing JSON
app.use(express.json());

// Load mantras data asynchronously
let mantras = [];
(async () => {
    try {
        const data = await fs.readFile(path.resolve("./public/mantra.json"), "utf-8");
        mantras = JSON.parse(data);
    } catch (err) {
        console.error("Error loading mantras: ", err);
    }
})();

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
