const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const blockSchema = new Schema({
  no_rooms: { type: Number, required: true },
  no_bathrooms: { type: Number, required: true },
  image: { data: Buffer, contentType: String },
  sqft: { type: Number },
});

const Block = mongoose.model("Block", blockSchema);

module.exports = Block;
