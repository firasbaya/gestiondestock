module.exports = mongoose => {
  var schema = mongoose.Schema(
    
      {
     
    Designation:{
      type:String,
      required:true
    },
    Marque:{
      type:String,
      required:true
    },
    Categorie:{
      type:String,
      required:true
    },
    Id_fournisseur:{
      type:String,
      required:true
    },
    PrixAchat:{
      type:Number,
      required:true
    },
    PrixVente:{
      type:Number,
      required:true
    },
    MaxRemise:{
      type:Number,
      required:true
    },
    QuantiteAlerte:{
      type:Number,
      required:true
    },
    QuantiteArticle:{
      type:Number,
      required:true
    },
  
        published:Boolean
      },
      { timestamps: true }
    
  );
  
    const Article = mongoose.model("article", schema);
    return Article;
  };
  module.exports = mongoose => {
    var schema = mongoose.Schema(
      
        {
       
      Designation:{
        type:String,
        required:true
      },
      Marque:{
        type:String,
        required:true
      },
      Categorie:{
        type:String,
        required:true
      },
      Id_fournisseur:{
        type:String,
        required:true
      },
      PrixAchat:{
        type:Number,
        required:true
      },
      PrixVente:{
        type:Number,
        required:true
      },
      MaxRemise:{
        type:Number,
        required:true
      },
      QuantiteAlerte:{
        type:Number,
        required:true
      },
      QuantiteArticle:{
        type:Number,
        required:true
      },
    
          published:Boolean
        },
        { timestamps: true }
      
    );
    
      const Article = mongoose.model("article", schema);
      return Article;
    };
 