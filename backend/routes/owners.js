const router = require("express").Router();
let Owner = require("../models/owner.model");

router.route("/").get((req, res) => {
  Owner.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const email = req.body.email;
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const contact_no = req.body.contact_no;
  //   const apartment = req.body.apartment;

  const newOwner = new Owner({ email, first_name, last_name, contact_no });

  newOwner
    .save()
    .then(() => res.json("Owner added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
