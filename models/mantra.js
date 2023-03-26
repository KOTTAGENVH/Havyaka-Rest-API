const mongoose = require("mongoose")

/* 
        [
        name: name of shloka,
        shloka: {
            kannada:{...},
            english:{...},
            hindi:{...}
        },
        range: [means in term of short or long],
        godName: name of god,
        purpose: purpose of the shloka,
        ]
*/

const mantraSchama = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true,"Name must be provided"],
            minlength:5
        },
        shloka: {
                type: String,
                required: [true,"shloka must be provided"],
                minlength:20
        },
        range: {
            type: String,
            required: true,
        },
        godName: {
            type: String,
            required: true,
        },
        purpose: {
            type: String,
            required: [true,"purpose must be provided"],
            minlength:5
        }
    }
)


module.exports = mongoose.model("Mantra", mantraSchama);