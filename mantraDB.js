require("dotenv").config();

const connectDB = require("./db/conn")
const Mantra = require("./models/mantra")
const mantraJson = require("./mantra.json")

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URI)
        await Mantra.deleteMany()
        await Mantra.create(mantraJson)
        console.log("success");
    } catch (err) {
        console.log(err);
    }
}
start()
