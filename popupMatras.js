// only for updating all the data to atlas

require("dotenv").config();

const connectDB = require("./db/conn")
const Mantra = require("./models/mantra")
const mantraJson = require("./mantra.json")

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URI)
        await Mantra.deleteMany()
        console.log("Updating...");
        await Mantra.create(mantraJson)
        console.log("Completed...");
        process.exit(0)
    } catch (err) {
        console.log(err);
    }
}
start()
