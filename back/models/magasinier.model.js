module.exports = mongoose => {
  var schema = mongoose.Schema(
    
      {
           Cin:{
              type:String,
            },
              Nom:{
                type:String,
              },
              Adresse:{
                type:String,
              },
              Téléphone:{
                type:String,
              },
              Email:{
                type:String,
              },
          Password:{
              type:String,
          },
          
          published:Boolean
      },
      { timestamps: true }
    
  );
 
    const Magasinier = mongoose.model("magasinier", schema);
    return Magasinier;
  };
