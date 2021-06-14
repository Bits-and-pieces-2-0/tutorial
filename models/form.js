 const mongoose = require('mongoose')



//type defined

const userData = new mongoose.Schema({
    firstname:{
      type:String,
      required:true,
      default:"alok"
      },
  
    lastname:String,
   
  });

 const newUser=mongoose.model("formData",userData);

 export default newUser;