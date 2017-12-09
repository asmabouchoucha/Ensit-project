const mongoose= require('mongoose'); 
const FormateurSchema= mongoose.Schema({
    name: {type: String, required: true}, 
    domaine: {type: String, required: true}
  

}); 

const Formateurs= module.exports=mongoose.model('formateurs',FormateurSchema);