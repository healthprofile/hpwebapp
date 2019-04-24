const express = require('express');
const router = express.Router();
const models = require('../models');

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

router.get('/getinfo', (req, res, next) => {
	//res.send({firstName: 'Morsal'});
	models.User.findOne({
		where: {id: req.user.id},
	})
	.then((user) => {
		res.send(user);
	});
});

module.exports = router;
