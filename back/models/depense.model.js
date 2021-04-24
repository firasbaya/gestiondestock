module.exports = mongoose => {
  var schema = mongoose.Schema(
    
      {
      Titre:{
        type:String,
        required:true,
      },
      Montant:{
        type:Number,
        required:true,
      }

      },
      { timestamps: true }
    
  );
  
    const Depense = mongoose.model("depense", schema);
    return Depense;
  };
