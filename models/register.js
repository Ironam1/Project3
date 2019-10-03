const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
  user: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  babyname: { type: String, required: true },
  babyimg: String,
  change: {},
  sleep: {},
  eat: {}
});
userSchema.methods = {
  checkPassword: function (inputPassword) {
  return bcrypt.compareSync(inputPassword, this.password)
},
  hashPassword: plainTextPassword => {
  return bcrypt.hashSync(plainTextPassword, 10)
  }
}
userSchema.pre('save', function (next) {
  if (!this.password) {
    console.log('models/user.js =======NO PASSWORD PROVIDED=======')
    next()
  } else {
    console.log('models/user.js hashPassword in pre save');
    this.password = this.hashPassword(this.password)
    next()
  }
})
const User = mongoose.model("user", userSchema);

module.exports = User;
