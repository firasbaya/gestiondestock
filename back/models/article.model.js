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
 
    QuantiteAlerte:{
      type:Number,
      required:true
    },
    QuantiteArticle:{
      type:Number,
      default:0,
      required:false
    },
    totalSortie:{
      type:Number,
      default:0,
      required:false
    },
    soldeSortie:{
      type:Number,
      default:0,
      required:false
    },
    
    soldeEntre:{
      type:Number,
      default:0,
      required:false
    },
    totalEntre:{
      type:Number,
      default:0,
      required:false
    },
    
    

  
        published:Boolean
      },
      { timestamps: true }
    
  );
  
    const Article = mongoose.model("article", schema);
    return Article;
  };
  