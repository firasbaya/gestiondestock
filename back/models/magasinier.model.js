module.exports = mongoose => {
  var schema = mongoose.Schema(
    
      {
           Cin:{
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
              Téléphone:{
                type:String,
                required:true
              },
              Email:{
                type:String,
                required:true
              },
          Password:{
              type:String,
              required:true,
          },
          
          published:Boolean
      },
      { timestamps: true }
    
  );
 
    const Magasinier = mongoose.model("magasinier", schema);
    return Magasinier;
  };
