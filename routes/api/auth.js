const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const User = require("../../models/User");

/*
  @route         GET api/notes
  @description   get all notes
  @access        public
*/

router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
  res.send("User route");
});

module.exports = router;
