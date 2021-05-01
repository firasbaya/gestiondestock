module.exports = mongoose => {
  var schema = mongoose.Schema(
    
      {  Cin:{
        type:String,
      },
        Nom:{
          type:String,
        },
        Adresse:{
          type:String,
        },
        Telephone:{
          type:String,
        },
        Email:{
          type:String,
        },
      
        Crédit:{
        type:Number,
      default:0,
      required:false
    },
        published:Boolean
      },
      { timestamps: true }
    
  );

  
    const Client = mongoose.model("client", schema);
    return Client;
  };
