const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');

/*
  @route         GET api/users
  @description   get all users
  @access        public
*/

router.post('/', [
  check('name', 'name is required').not().isEmpty(),
  check('email', 'please enter a valid email').isEmail(),
  check('password', 'please enter a password which is longer than 6 characters').isLength({ min: 6}),
],(req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({errors: errors.array()})
  }
  res.send('User route');
});

module.exports = router;