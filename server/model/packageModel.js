const mongoose = require("mongoose");

const packageSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    price: {
      type: Number,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    category: {
      type: String,
      required: true,
      enum: ["umrah", "hajj"],
    },
    accommodation: {
      type: String,
      required: true,
    },
    meal: {
      type: String,
      required: true,
    },
    transport: {
      type: String,
      required: true,
    },
    makkahAccommodation: {
      type: String,
      required: true,
    },
    madinahAccommodation: {
      type: String,
      required: true,
    },
    Qurbani: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const packageModel = mongoose.model("Package", packageSchema);

module.exports = packageModel;
