const express = require('express');
const router = express.Router();

/*
  @route         GET api/notes
  @description   get all notes
  @access        public
*/

router.get('/', (req, res) => res.send);

module.exports = router;