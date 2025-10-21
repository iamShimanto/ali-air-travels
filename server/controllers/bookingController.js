const bookingModel = require("../model/bookingModel");
const packageModel = require("../model/packageModel");

const { errorResponse, successResponse } = require("../utils/responseHandler");
const sendAdminEmail = require("../utils/sendAdminEmail");

const createBooking = async (req, res) => {
  try {
    const {
      packageId,
      customer_name,
      customer_email,
      customer_phone,
      pax,
      language,
      notes,
    } = req.body;

    const pkg = await packageModel.findById(packageId);
    if (!pkg)
      return res
        .status(404)
        .json({ success: false, message: "Package not found" });

    const booking = new bookingModel({
      packageId,
      customer_name,
      customer_email,
      customer_phone,
      pax,
      language,
      notes,
    });
    await booking.save();

    try {
      const adminEmail = process.env.ADMIN_EMAIL;
      if (adminEmail) {
        const subject = "New Package Booking Received";
        const htmlContent = `
          <h2 style="color:#0ea5e9; margin-bottom: 18px;">New Booking Alert!</h2>
          <table style="width:100%; border-collapse:collapse; margin-bottom: 24px;">
            <tr><td style="padding:8px 0;"><b>Name:</b></td><td>${customer_name}</td></tr>
            <tr><td style="padding:8px 0;"><b>Email:</b></td><td>${customer_email}</td></tr>
            <tr><td style="padding:8px 0;"><b>Phone:</b></td><td>${customer_phone}</td></tr>
            <tr><td style="padding:8px 0;"><b>Pax:</b></td><td>${pax}</td></tr>
            <tr><td style="padding:8px 0;"><b>Package:</b></td><td>${
              pkg.title_en || pkg.title_bn || pkg.title || "N/A"
            }</td></tr>
            <tr><td style="padding:8px 0;"><b>Category:</b></td><td>${
              pkg.category
            }</td></tr>
            <tr><td style="padding:8px 0;"><b>Type:</b></td><td>${
              pkg.type
            }</td></tr>
            <tr><td style="padding:8px 0;"><b>Notes:</b></td><td>${
              notes || "N/A"
            }</td></tr>
          </table>
          <p style="color:#334155; font-size:15px;">Please review and follow up as needed.<br>— <b>Ali Air Travels System</b></p>
        `;
        await sendAdminEmail(adminEmail, subject, htmlContent);
      }
    } catch (emailErr) {
      console.error("Booking confirmation email to admin failed:", emailErr);
    }

    return successResponse(res, 200, "Booking created Successfully", booking);
  } catch (error) {
    return errorResponse(res, 500, "Create booking failed", error);
  }
};

const getBookings = async (req, res) => {
  try {
    const { status } = req.query;
    const filter = {};
    if (status) filter.status = status;

    const bookings = await bookingModel.find(filter).populate("packageId");
    const validBookings = bookings.filter(
      (booking) => booking.packageId !== null
    );

    if (validBookings.length === 0) {
      return errorResponse(res, 400, "No bookings found with valid package");
    }
    return successResponse(
      res,
      200,
      "Booking fetched successfully",
      validBookings
    );
  } catch (error) {
    return errorResponse(res, 500, "booking fetched failed");
  }
};

const getBookingById = async (req, res) => {
  try {
    const { id } = req.params;
    const booking = await bookingModel.findById(id).populate("packageId");
    if (!booking) {
      return errorResponse(res, 404, "booking not found");
    }

    return successResponse(res, 200, "Booking fetched successfully", booking);
  } catch (error) {
    return errorResponse(res, 500, "get booking by id failed", error);
  }
};

const updateBookingStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const validStatus = ["pending", "confirmed", "cancelled"];
    if (!validStatus.includes(status)) {
      return errorResponse(res, 400, "Invalid status");
    }

    const updated = await bookingModel.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );
    if (!updated) {
      return errorResponse(res, 404, "Booking not found");
    }

    return successResponse(
      res,
      200,
      "Booking status updated successfully",
      updated
    );
  } catch (error) {
    return errorResponse(res, 500, "update booking status failed", error);
  }
};

const getBookingByContact = async (req, res) => {
  try {
    const { phone, email } = req.query;

    if (!phone && !email) {
      return errorResponse(res, 400, "Phone or email is required");
    }

    const filter = {};
    if (phone) filter.customer_phone = phone;
    if (email) filter.customer_email = email;

    const bookings = await bookingModel.find(filter).populate("packageId");
    if (bookings.length === 0) {
      return errorResponse(res, 400, "Booking not found");
    }

    return successResponse(
      res,
      200,
      "Get booking by contact successfully",
      bookings
    );
  } catch (error) {
    return errorResponse(res, "booking fetced failed (by contact)", error);
  }
};

module.exports = {
  createBooking,
  getBookings,
  getBookingById,
  updateBookingStatus,
  getBookingByContact,
};
