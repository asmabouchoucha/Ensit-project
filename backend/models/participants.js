
const mongoose= require('mongoose'); 
const ParticipantSchema= mongoose.Schema({
    name: {type: String, required: true}

  

}); 

const Participants= module.exports=mongoose.model('participants',ParticipantSchema);