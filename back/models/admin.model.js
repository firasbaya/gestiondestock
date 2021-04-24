module.exports = mongoose => {
    var schema = mongoose.Schema(
      
        {
            
            Nom: {
                type:String,
                required:true,
            },
            Email: {
                type:String,
                required:true
            },
            Password:{
                type:String,
                required:true
            },
        
            published:Boolean
        },
        { timestamps: true }
      
    );
   
    
      const Admin = mongoose.model("admin", schema);
      return Admin;
    };
 