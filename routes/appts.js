const express = require('express');
const router = express.Router();
var models = require("../models");


router.get('/all', function(req, res, next) {

  // TODO: take off when you properly prevent people from accessing the dashboard
  // without being logged in

  if (!req.user) {
    res.send('User not logged in', 400);
  }

  models.Appointments.findAll({
    where: {
      userId: req.user.id
    }
  })
  .then((appts) => {
    res.send(appts);
  })
  .catch((err) => {
    res.send(err, 400);
  })
});


module.exports = router;
