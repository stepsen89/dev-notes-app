const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");

const { check, validationResult } = require("express-validator");

const User = require("../../models/User");

/*
  @route         GET api/users
  @description   get all users
  @access        public
*/

router.post(
  "/",
  [
    check("name", "name is required")
      .not()
      .isEmpty(),
    check("email", "please enter a valid email").isEmail(),
    check(
      "password",
      "please enter a password which is longer than 6 characters"
    ).isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        res.status(400).json({ errors: [{ msg: "User already exists" }] });
      }

      // get the gravatar, but if not having one use mm
      const avatar = gravatar.url(email, {
        s: "200",
        r: "pg",
        d: "mm"
      });

      console.log("here");

      user = new User({
        name,
        email,
        avatar,
        password
      });

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

      console.log(config.get("jwtToken"));

      jwt.sign(
        payload,
        config.get("jwtToken"),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          console.log(token);
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
