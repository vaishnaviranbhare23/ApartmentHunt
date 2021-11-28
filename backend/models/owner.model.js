const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ownerSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    contact_no: {
      type: Number,
      required: true,
      maxlength: 10,
    },
    password: { type: String, required: true },
    quote: { type: String },
  },
  { collection: "user-data" },
  {
    timestamps: true,
  }
);

const Owner = mongoose.model("Owner", ownerSchema);

module.exports = Owner;
