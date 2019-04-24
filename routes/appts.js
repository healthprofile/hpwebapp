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

router.post('/addAppointment', function(req, res, next) {
  // models.Appointments.()
  console.log("addAppointment");
  console.log(req.body);

  date = req.body.appointmentDate;
  description = req.body.appointmentDetails;
  title = req.body.appointmentTitle;
  type = req.body.appointmentType;


models.Appointments.create({ userId: 1, date: date, description: description, type: type})
  .then(() => models.User.findOrCreate({where: {id: 1}, }))
  // .then(([userId, created]) => {
  //   console.log(userId.get({
  //     plain: true
  //   }))
  //   console.log(created)

    
  //   In this example, findOrCreate returns an array like this:
  //   [ {
  //       username: 'fnord',
  //       job: 'omnomnom',
  //       id: 2,
  //       createdAt: Fri Mar 22 2013 21: 28: 34 GMT + 0100(CET),
  //       updatedAt: Fri Mar 22 2013 21: 28: 34 GMT + 0100(CET)
  //     },
  //     false
  //   ]
  //   The array returned by findOrCreate gets spread into its 2 parts by the array spread on line 3, and
  //   the parts will be passed as 2 arguments to the callback function beginning on line 69, which will
  //   then treat them as "user" and "created" in this case. (So "user" will be the object from index 0
  //   of the returned array and "created" will equal "false".)
    
  // })


});


module.exports = router;
