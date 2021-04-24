module.exports = mongoose => {
  var schema = mongoose.Schema(
    
      {  Cin:{
        type:String,
        required:true
      },
        Nom:{
          type:String,
          required:true
        },
        Adresse:{
          type:String,
          required:true
        },
        Telephone:{
          type:String,
          required:true
        },
        Email:{
          type:String,
          required:true
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
