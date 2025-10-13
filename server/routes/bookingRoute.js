const express = require("express");
const { createBooking, getBookings, getBookingById, updateBookingStatus, getBookingByContact } = require("../controllers/bookingController");
const router = express.Router();

router.post("/create-booking", createBooking);

router.get("/get-booking", getBookings);

router.get("/booking/:id", getBookingById);

router.patch("/bookings/:id/status", updateBookingStatus);

router.get("/get-booking-by-contact", getBookingByContact)

module.exports = router;
