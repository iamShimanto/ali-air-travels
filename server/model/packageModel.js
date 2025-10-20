const mongoose = require("mongoose");

const packageSchema = new mongoose.Schema(
  {
    type: { type: String, enum: ["hajj", "umrah"], required: true },
    category: { type: String, required: true },

    title_en: { type: String, required: true },
    title_bn: { type: String, required: true },

    price_en: { type: String, required: true },
    price_bn: { type: String, required: true },
    duration_en: { type: String },
    duration_bn: { type: String },

    accommodation_en: { type: String, required: true },
    accommodation_bn: { type: String, required: true },
    makkah_accommodation_en: { type: String, required: true },
    makkah_accommodation_bn: { type: String, required: true },
    madinah_accommodation_en: { type: String, required: true },
    madinah_accommodation_bn: { type: String, required: true },

    meal_en: { type: String, required: true },
    meal_bn: { type: String, required: true },
    transport_en: { type: String, required: true },
    transport_bn: { type: String, required: true },

    visa_ticket_en: { type: String },
    visa_ticket_bn: { type: String },
    qurbani_en: { type: String },
    qurbani_bn: { type: String },
  },
  { timestamps: true }
);

const packageModel = mongoose.model("Package", packageSchema);

module.exports = packageModel;
