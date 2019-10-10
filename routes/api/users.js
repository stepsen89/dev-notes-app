const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');

const { check, validationResult } = require('express-validator/check');

const user = require('../models/User');

/*
  @route         GET api/users
  @description   get all users
  @access        public
*/

router.post('/', [
  check('name', 'name is required').not().isEmpty(),
  check('email', 'please enter a valid email').isEmail(),
  check('password', 'please enter a password which is longer than 6 characters').isLength({ min: 6}),
],
async (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({errors: errors.array()})
  };

  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    
    if (user){
      res.status(400).json({ errors: [{ msg: 'User already exists'}]})
    }
  } catch(err) {
    console.log(err.message);
    res.status(500).send('Server error');

  }

  // check if user exists



  // get user gravatar

  // encrypt password

  // return json web token


  res.send('User route');
});

module.exports = router;