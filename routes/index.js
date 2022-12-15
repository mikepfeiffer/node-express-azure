const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  //geterror() ; 
  res.render('index', {
    title: 'Azure CI/CD Pipeline',   
  });
});

module.exports = router;