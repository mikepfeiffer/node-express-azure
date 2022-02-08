const express = require('express');
const router = express.Router();

/* GET contact page. */
router.get('/', (req, res) => {
  res.render('contact', {
    title: 'Contact Qritive',
  });
});

module.exports = router;