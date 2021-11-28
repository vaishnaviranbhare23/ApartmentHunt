const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const blockSchema = new Schema({
  no_rooms: { type: Number, required: true },
  no_bathrooms: { type: Number, required: true },
  image: { data: Buffer, contentType: String },
  sqft: { type: Number },
});

const apartmentSchema = new Schema({
  name: { type: String, required: true, maxlength: 30 },
  state: { type: String, required: true, maxlength: 30 },
  city: { type: String, required: true, maxlength: 30 },
  pincode: { type: Number, required: true, maxlength: 30 },
  rent: { type: Number, required: true, maxlength: 30 },
  extraInfo: { type: String, maxlength: 1000 },
  block: [blockSchema],
  email: { type: String, required: true },
  // owner: {
  //   type: String,
  //   ref: "Owner",
  //   required: true,
  // },
});

const Apartment = mongoose.model("Apartment", apartmentSchema);

module.exports = Apartment;
