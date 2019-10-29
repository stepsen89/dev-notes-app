const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const config = require("config");
const { check, validationResult } = require("express-validator");

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
});

/*
  @route         POST api/auth
  @description   authenticate user and get token
  @access        public
*/

router.post(
  "/",
  [
    check("email", "please enter a valid email").isEmail(),
    check("password", "password is required").exists()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });
      console.log(user);

      if (!user) {
        res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      console.log(isMatch);

      if (!isMatch) {
        res.status(400).json({ errors: [{ msg: "PW dont match" }] });
      }

      // it is a good idea to have the same error message due to security issues

      // encrypt password

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      // everything which returns a promise use await in front of it

      await user.save();

      const payload = {
        user: {
          id: user.id
        }
      };

      // console.log("jwt", config.get("jwtToken"));

      jwt.sign(
        payload,
        config.get("jwtToken"),
        { expiresIn: 3600000000 },
        (err, token) => {
          if (err) throw err;
          // console.log(token);
          console.log(err);
          res.json({ token });
        }
      );
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Server error");
    }
  }
);

module.exports = router;
