const mongoose= require('mongoose'); 
const FormateurSchema= mongoose.Schema({
    name: {type: String, required: true},
    note: {type: Number, required: true}

  

}); 

const Formateurs= module.exports=mongoose.model('formateurs',FormateurSchema);