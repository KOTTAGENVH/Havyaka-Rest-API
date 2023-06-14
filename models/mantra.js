const mongoose = require("mongoose")

const mantraSchama = new mongoose.Schema({
  number: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: [true, "Name must be provided"],
    minlength: 5,
  },
  shloka: {
    type: String,
    required: [true, "shloka must be provided"],
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
    required: [true, "purpose must be provided"],
  },
  duration: {
    type: String,
    required: [true, "purpose must be provided"],
  },
  origin: {
    type: String,
    required: [true, "purpose must be provided"],
  },
  chantingInstructions: {
    type: String,
    required: [true, "purpose must be provided"],
  },
  benefits: {
    type: String,
    required: [true, "purpose must be provided"],
  },
  culturalSignificance: {
    type: String,
    required: [true, "purpose must be provided"],
  },
  references: [
    {
      title: {
        type: String,
        required: true,
      },
      link: {
        type: String,
        required: true,
      },
    },
  ],
});


module.exports = mongoose.model("Mantra", mantraSchama);