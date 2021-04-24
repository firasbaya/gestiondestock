module.exports = mongoose => {
  var schema = mongoose.Schema(
    
      {
        Cin:{
          type:String,
          required:true,
        },
          Nom:{
          type:String,
          required:true,
          },
          Adresse:{
              type:String,
              required:true,
            },
            Telephone:
            {
              type:String,
              required:true,
            },
          Email:{
            type:String,
            required:true,
          },
      
        
          published:Boolean
        },
      { timestamps: true }
    
  );

    const Fournisseur = mongoose.model("fournisseur", schema);
    return Fournisseur;
  };
