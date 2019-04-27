const express = require('express');
const router = express.Router();

// the isLoggedIn is so that every time you leave the page and it logs you out it redirects back to your login
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()){
        return next();
    }
    res.redirect('/login');
}

router.get('/', function(req, res, next) {
  return res.render('index');
});

router.get('/login', (req, res, next) => {
  res.render('index');
});

router.get('/dashboard', (req, res, next) => {
  res.render('index');
});

router.get('/myprofile', isLoggedIn, (req, res, next) => {
  res.render('index');
});

router.get('/newappointment', (req, res, next) => {
  res.render('index');
});

router.get('/forum', (req, res, next) => {
  res.render('index');
});

router.get('/signup', (req, res, next) => {
  res.render('index');
});

module.exports = router;
