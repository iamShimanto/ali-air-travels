const Users = require("../model/userModel");
const Package = require("../model/packageModel");
const Booking = require("../model/bookingModel");
const { errorResponse, successResponse } = require("../utils/responseHandler");

// Get high-level counts and recent activity for admin dashboard
const getOverview = async (req, res) => {
  try {
    const [
      totalUsers,
      totalPackages,
      totalBookings,
      pendingBookings,
      confirmedBookings,
      cancelledBookings,
    ] = await Promise.all([
      Users.countDocuments({}),
      Package.countDocuments({}),
      Booking.countDocuments({}),
      Booking.countDocuments({ status: "pending" }),
      Booking.countDocuments({ status: "confirmed" }),
      Booking.countDocuments({ status: "cancelled" }),
    ]);

    // recent bookings with package populated (latest 5)
    const recentBookings = await Booking.find({})
      .sort({ createdAt: -1 })
      .limit(5)
      .populate("packageId");

    const data = {
      users: { total: totalUsers },
      packages: { total: totalPackages },
      bookings: {
        total: totalBookings,
        byStatus: {
          pending: pendingBookings,
          confirmed: confirmedBookings,
          cancelled: cancelledBookings,
        },
        recent: recentBookings,
      },
    };

    return successResponse(res, 200, "Overview fetched successfully", data);
  } catch (error) {
    return errorResponse(res, 500, "Fetch overview failed", error);
  }
};

module.exports = { getOverview };
