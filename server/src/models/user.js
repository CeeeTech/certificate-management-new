const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  f_name: {
    type: String,
    required: true,
  },
  S_name: {
    type: String,
    required: true,
  },
  Co_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Role",
    required: true,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
