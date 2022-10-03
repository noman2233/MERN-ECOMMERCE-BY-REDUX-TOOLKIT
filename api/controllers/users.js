const User = require("../models/users");

//UPDATE A User CONTROLLER

const updateUser = async (req, res, next) => {
  try {
    let user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).send("Not Found");
    }

    let updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json({ status: "User updated successfully", updatedUser });
  } catch (error) {
    next(err);
  }
};

//DELETE A User INFORMATION FROM DATABASE- CONTROLLER

const deleteUser = async (req, res, next) => {
  try {
    let deletedUser = await User.findByIdAndDelete(req.params.id);

    res.status(200).send({ status: "User deleted successfully", deletedUser });
  } catch (error) {
    next(err);
  }
};

//  GET ALL User INFORMATION FROM DATABASE -CONTROLLER
const getAllUsers = async (req, res, next) => {
  try {
    let allUsers = await User.find();
    res.status(200).send({ status: "All users are here", allUsers });
  } catch (error) {
    next(error);
  }
};

//  GET SPecific  User INFORMATION FROM DATABASE ON BASIS OF ID -CONTROLLER

const getOneUser = async (req, res, next) => {
  try {
    let oneUser = await User.findById(req.params.id);
    res.status(200).send({ status: "All users are here", oneUser });
  } catch (error) {
    next(err);
  }
};

module.exports = {

  updateUser,
  deleteUser,
  getAllUsers,
  getOneUser,
};
