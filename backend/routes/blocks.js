const router = require("express").Router();
let Block = require("../models/block.model");

router.route("/").get((req, res) => {
  Block.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const no_rooms = req.body.no_rooms;
  const no_bathrooms = req.body.no_bathrooms;
  const sqft = req.body.sqft;

  const newBlock = new Block({ no_rooms, no_bathrooms, sqft });

  newBlock
    .save()
    .then(() => res.json("Block added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
