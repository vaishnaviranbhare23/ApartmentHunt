const router = require("express").Router();
let Apartment = require("../models/apartment.model");

router.route("/").get((req, res) => {
  Apartment.find()
    .then((apartments) => res.json(apartments))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const email = req.body.email;
  const name = req.body.name;
  const state = req.body.state;
  const city = req.body.city;
  const pincode = req.body.pincode;
  const rent = req.body.rent;
  const extraInfo = req.body.extraInfo;
  const block = req.body.block;

  const newApartment = new Apartment({
    email,
    name,
    state,
    city,
    pincode,
    rent,
    extraInfo,
    block,
  });

  newApartment
    .save()
    .then(() => res.json("Apartment added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/mylist/:id").get((req, res) => {
  Apartment.find({ email: req.params.id })
    .then((apartment) => res.json(apartment))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Apartment.findByIdAndDelete(req.params.id)
    .then(() => res.json("Apartment deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:").post((req, res) => {
  Apartment.findById(req.params.id)
    .then((apartment) => {
      apartment.email = req.body.email;
      apartment.name = req.body.name;
      apartment.state = req.body.state;
      apartment.city = req.body.city;
      apartment.pincode = Number(req.body.pincode);
      apartment.rent = Number(req.body.rent);
      apartment.extraInfo = req.body.extraInfo;
      apartment.block = req.body.block;

      apartment
        .save()
        .then(() => res.json("Apartment updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
