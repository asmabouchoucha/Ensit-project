const mongoose= require('mongoose'); 
const SessionSchema= mongoose.Schema({
    name: {type: String, required: true},
    track: {type: String, required: true},
    Date:{type: Date, required: true},
    duree:{type: Number, required: true},
    local:{type: String, required: true},
    participants:{type: Number, required: true},
    isCompleted:{type: Boolean, required: false}

}); 

const Session= module.exports=mongoose.model('Session',SessionSchema);