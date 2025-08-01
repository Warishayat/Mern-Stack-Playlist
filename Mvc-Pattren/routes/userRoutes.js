const express = require ("express");
const router = express.Router();
const { getProduct,createUser,updateUser,deleteUser} = require("../controllers/User");

// define route here
router.get("/users",getProduct);
router.post("/users",createUser);
router.put("/users/:id",updateUser);
router.delete("/users/:id",deleteUser);


module.exports = router;
