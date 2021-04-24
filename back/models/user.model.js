const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    email:{ 
      type:String,
      required:true,
    },
    password: {
      type:String,
      required:true,      
    },
    nom:String,
    cin:String,
    telephone:String,
    adresse:String,
    
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ]
    
  })
);

module.exports = User;