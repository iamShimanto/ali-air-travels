const packageModel = require("../model/packageModel");
const { errorResponse, successResponse } = require("../utils/responseHandler");

const createPackage = async (req, res) => {
  try {
    const {
      title,
      price,
      accommodation,
      meal,
      transport,
      makkahAccommodation,
      madinahAccommodation,
      Qurbani,
      category,
    } = req.body;

    if (
      !title ||
      !accommodation ||
      !meal ||
      !transport ||
      !makkahAccommodation ||
      !madinahAccommodation ||
      !category
    ) {
      return errorResponse(res, 404, "Required all fields");
    }

    const slug = title?.split(" ").join("+").toLowerCase();

    const existProduct = await packageModel.findOne({ slug });
    if (existProduct) {
      return errorResponse(res, 400, "Package name already exist");
    }

    const newPackage = new packageModel({
      title,
      category,
      price,
      accommodation,
      meal,
      transport,
      makkahAccommodation,
      madinahAccommodation,
      Qurbani,
      slug,
    });
    await newPackage.save();

    return successResponse(
      res,
      200,
      "New Package Created Successfully",
      newPackage
    );
  } catch (error) {
    return errorResponse(res, 500, "create package failed", error);
  }
};

const allPackage = async(req,res)=>{
    try {
        

        
    } catch (error) {
        return errorResponse(res, 500, "All package fetched failed", error)
    }
}



module.exports = {
  createPackage,
  allPackage,
};
