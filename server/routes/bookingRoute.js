const express = require("express");
const { createBooking, getBookings, getBookingById, updateBookingStatus, getBookingByContact } = require("../controllers/bookingController");
const router = express.Router();

// ========== create booking
router.post("/create-booking", createBooking);

// ========== get booking
router.get("/get-booking", getBookings);

// ========== get booking by id
router.get("/booking/:id", getBookingById);

// ============ update booking status
router.patch("/bookings/:id/status", updateBookingStatus);

// ============= get booking by contact
router.get("/get-booking-by-contact", getBookingByContact)

module.exports = router;
