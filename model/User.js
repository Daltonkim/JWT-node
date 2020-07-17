const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = {
  name: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  email: {
    type: String,
    required: true,
    min: 6,
    max: 255,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 1024,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
};

const user = new Schema(userSchema, {
  timestamps: true,
  toJSON: {
    virtuals: true,
  },
  toObject: {
    virtuals: true,
  },
});

module.exports = mongoose.model("User", user);
