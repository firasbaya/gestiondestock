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
        published:Boolean
      },
      { timestamps: true }
    
  );
 
    const Entre = mongoose.model("entre", schema);
    return Entre;
  };
