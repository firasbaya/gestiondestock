module.exports = mongoose => {
  var schema = mongoose.Schema(
    
      {
        Id_Article:{
        type:String,
        required:true,
        },
        Quantité:{
          type:Number,
          required:true,
        },
        Cin_Client: {
          type:String,
          required:true,
        },
        Montant:{
          type:Number,
          required:true, 
        },
        Crédit:{
          type:Number,
          required:true,
        }, 
        published:Boolean
      },
      { timestamps: true }
    
  );

    const Sortie = mongoose.model("sortie", schema);
    return Sortie;
  };
