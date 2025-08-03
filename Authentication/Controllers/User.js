const express = require("express");
const User = require("../Models/UserModel");

// lets define what user want
const getallUsers = async (req, res) => {
  try {
    const user = await User.find();
    if (!user || user.length === 0) {
      return res.status(404).json({
        success: false,
        message: "user not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: user,
    });
  } catch (error) {
    return res.status(500).json({
        success:false,
        message: "Invalid Server Error"
    })
  }
};


module.exports = {getallUsers}