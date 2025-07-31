const express = require("express");
const router = express.Router();
const User = require("../Models/UserModel");

// chalo route define karte haen.

router.get("/users", async (req, res) => {
  try {
    // user ko database se nikalo aur dikhao
    const user = await User.find();
    res.status(200).json(user);
  } catch (error) {
    //nahi hae tu dikha do eror
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

router.post("/users", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = new User({ name, email, password });
    await user.save();
    res.status(201).json({
      success: true,
      user: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// update kar deta hu m ayahn par
router.put("/users/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;

  try {
    const updateUser = await User.findByIdAndUpdate(
      id,
      { name, email, password },
      { new: true, runValidators: true } 
    );

    if (!updateUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      user: updateUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

//delet kar dety haen guys delet request dalo sath m bta do k yh id h isko jakar kar do delet
router.delete("/users/:id", async(req,res)=>{
    // kuch kuch kam krengy yahn par
    const {id} = req.params
    // sub se phly id nikal lo paramter se
    try {
        const userDelet = await User.findByIdAndDelete(id)
        // usk against data find kar k delet kar do 
        if(!userDelet){
            res.status(404).json({
                success:false,
                message: "User is not found"
            })
        }
        res.status(200).json({
            success:true,
            messgae: "user has been deleted sucessfully"
        })
    // user ko bta do k kar dea hea apka kam
    } catch (error) {
        res.status(500).json({
        success: false,
        message: error.message,
        });
    }
})

module.exports = router;
