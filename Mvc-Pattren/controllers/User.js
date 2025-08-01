const mongoose = require("mongoose");
const User = require("../Models/UserModel");
const ConnectDB = require('../config/db')

// write down the business logic here.
const getProduct = async (req, res) => {
  try {
    const allProducts = await User.find();

    if (!allProducts || allProducts.length === 0) {
      res.status(404).json({
        success: false,
        message: "No User is Found",
      });
    }
    res.status(200).json({
      successs: true,
      message: allProducts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "internal server error",
    });
  }
};

// creat unique user only
const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const alreadyExist = await User.findOne({ email });
    if (alreadyExist) {
      return res.status(409).json({
        success: false,
        message: "User already exists",
      });
    }

    const newUser = new User({ name, email, password });
    await newUser.save();
    res.status(201).json({
      success: true,
      message: "User created successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};


// Delete User
const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const checkUser = await User.findById(id);
    if (!checkUser) {
      res.status(404).json({
        success: false,
        message: "user is not found",
      });
    }
    const deletUser = await User.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "User is delected sucessfully",
    });}
    catch (error) {
    res.status(500).json({
      success: false,
      message: "internal server error",
    });
  }
};


// update the record
const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;

  try {
    const foundUser = await User.findById(id);
    if (!foundUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { name, email, password },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(400).json({
        success: false,
        message: "Failed to update user. Please try again.",
      });
    }

    res.status(200).json({
      success: true,
      message: "User updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};


module.exports = { getProduct,createUser,deleteUser,updateUser};
