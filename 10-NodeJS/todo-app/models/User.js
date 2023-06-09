const mongoose = require("mongoose");
const { Schema } = mongoose;

const bcrypt = require("bcrypt");

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    select: false,
    required: true
  }
});

userSchema.pre("save", async function () {
  const currentDocument = this;
  if (currentDocument.isModified("password")) {
    const hashedPassword = await bcrypt.hash(currentDocument.password, 10);
    currentDocument.password = hashedPassword;
  }
});

userSchema.methods.checkPassword = async function (password) {
  const currentDocument = this;
  const isMatch = await bcrypt.compare(password, currentDocument.password);
  return isMatch;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
