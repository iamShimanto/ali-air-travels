const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    packageId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Package",
      required: true,
    },

    customer_name: { type: String, required: true },
    customer_email: { type: String, required: true },
    customer_phone: { type: Number, required: true },

    pax: { type: Number, required: true },

    status: {
      type: String,
      enum: ["pending", "confirmed", "cancelled"],
      default: "pending",
    },

    notes: { type: String },
  },
  { timestamps: true }
);

const bookingModel = mongoose.model("Booking", bookingSchema);

module.exports = bookingModel;
