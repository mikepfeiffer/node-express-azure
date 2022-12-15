const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  geterror() ; 
  res.render('index', {
    title: 'Welcome to Contoso!',   
  });
});

module.exports = router;