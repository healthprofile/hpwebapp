const express = require('express');
const router = express.Router();
const User = require('../models/user');

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()){
        return next();
    }
    res.redirect('/login');
}

router.post('/addAllergen', (req, res, next) => {
	console.log("addAllergen")
  // res.render('index');
});

module.exports = router;
