const express = require('express');
const router = express.Router();

/*
  @route         GET api/users
  @description   get all users
  @access        public
*/

router.post('/', (req, res) => {
  console.log(req.body);
  res.send('User route');
});

module.exports = router;