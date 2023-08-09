const mongoose = require("mongoose");

const EmployesSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    default: true,
  },
  email:{
    type: String,
    default: true,
  },
  gender:{
    type: String,
    default: true,
  },
  phone:{
    type: String,
    default: true,
  },
  dob:{
    type: String,
    default: true,
  }
});

const Employes = mongoose.model("Employes", EmployesSchema);

module.exports = Employes;
