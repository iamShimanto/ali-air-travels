const packageModel = require("../model/packageModel");
const { errorResponse, successResponse } = require("../utils/responseHandler");

const createPackage = async (req, res) => {
  try {
    const data = req.body;

    const package = new packageModel(data);
    await package.save();

    return successResponse(res, 200, "Package created successfully", package);
  } catch (error) {
    return errorResponse(res, 500, "Package create failed", error);
  }
};

const allPackage = async (req, res) => {
  try {
    const { type, category, lang } = req.query;
    const filter = {};
    if (type) filter.type = type;
    if (category) filter.category = category;

    const packages = await packageModel.find(filter).sort({ createdAt: 1 });

    const data = packages.map((pkg) => ({
      id: pkg._id,
      type: pkg.type,
      category: pkg.category,
      title: lang === "bn" ? pkg.title_bn : pkg.title_en,
      price: lang === "bn" ? pkg.price_bn : pkg.price_en,
      duration: lang === "bn" ? pkg.duration_bn : pkg.duration_en,
      accommodation:
        lang === "bn" ? pkg.accommodation_bn : pkg.accommodation_en,
      meal: lang === "bn" ? pkg.meal_bn : pkg.meal_en,
      transport: lang === "bn" ? pkg.transport_bn : pkg.transport_en,
      makkah_accommodation:
        lang === "bn"
          ? pkg.makkah_accommodation_bn
          : pkg.makkah_accommodation_en,
      madinah_accommodation:
        lang === "bn"
          ? pkg.madinah_accommodation_bn
          : pkg.madinah_accommodation_en,
      visa_ticket: lang === "bn" ? pkg.visa_ticket_bn : pkg.visa_ticket_en,
      qurbani: lang === "bn" ? pkg.qurbani_bn : pkg.qurbani_en,
    }));

    return successResponse(res, 200, "Packaged fetched successfully", data);
  } catch (error) {
    return errorResponse(res, 500, "All packaged fetched failed", error);
  }
};

const getSinglePackage = async (req, res) => {
  try {
    const { id } = req.params;
    const lang = req.query.lang;

    const pkg = await packageModel.findById(id);
    if (!pkg) {
      return errorResponse(res, 404, "Package not found");
    }
    const data = {
      id: pkg._id,
      type: pkg.type,
      category: pkg.category,
      title: lang === "bn" ? pkg.title_bn : pkg.title_en,
      price: lang === "bn" ? pkg.price_bn : pkg.price_en,
      duration: pkg.duration || null,
      accommodation:
        lang === "bn" ? pkg.accommodation_bn : pkg.accommodation_en,
      meal: lang === "bn" ? pkg.meal_bn : pkg.meal_en,
      transport: lang === "bn" ? pkg.transport_bn : pkg.transport_en,
      makkah_accommodation:
        lang === "bn"
          ? pkg.makkah_accommodation_bn
          : pkg.makkah_accommodation_en,
      madinah_accommodation:
        lang === "bn"
          ? pkg.madinah_accommodation_bn
          : pkg.madinah_accommodation_en,
      visa_ticket: lang === "bn" ? pkg.visa_ticket_bn : pkg.visa_ticket_en,
      qurbani: lang === "bn" ? pkg.qurbani_bn : pkg.qurbani_en,
    };

    return successResponse(
      res,
      200,
      "Single package fetched successfully",
      data
    );
  } catch (error) {
    return errorResponse(res, 500, "single package fetched failed", error);
  }
};

const updatePackage = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await packageModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updated)
      return res
        .status(404)
        .json({ success: false, message: "Package not found" });

    return successResponse(res, 200, "package update successfully", updated);
  } catch (error) {
    return errorResponse(res, 500, "Upate package failed", error);
  }
};

const deletePackage = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPackage = await packageModel.findByIdAndDelete(id);
    if (!deletedPackage) {
      return errorResponse(res, 404, "Package not found");
    }

    return successResponse(res, 200, "Package deleted successfully");
  } catch (error) {
    return errorResponse(res, 500, "Deleta Package failed", error);
  }
};

module.exports = {
  createPackage,
  allPackage,
  getSinglePackage,
  updatePackage,
  deletePackage,
};
