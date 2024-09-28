import userDetails from "../models/authModel.js";

export const isAdmin = async (req, res, next) => {
  try {
    const id = req.userId;
    const isAdmin = await userDetails.findOne({
      _id: id,
      isActive: true,
      isAdmin: true,
    });
    if (!isAdmin) {
      return res.json({ message: "Unauthorized user logged in" });
    }
    next();
  } catch (error) {
    return res.json({ message: error.message });
  }
};
