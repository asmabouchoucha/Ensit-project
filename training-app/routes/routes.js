const express= require('express'); 
const router= express.Router(); 
const Session= require ('../models/sessions');
const Formateurs= require ('../models/formateurs');

var bodyParser=require('body-parser');
router.use(bodyParser.json());




router.post('/sessions', (req, res, next)=>{
 let newSession=new Session();
 newSession.name=req.body.name;
 console.log(newSession.name)
//  newSession.track=req.body.track;
//  newSession.date=req.body.date;
//  newSession.adress=req.body.adress;
//  newSession.participants=req.body.participants;
//  newSession.isCompleted=req.body.isCompleted;

//  newSession.save((err,session)=> {
//      if (err) {
//          res.send('erreeeeeur');
//      }
//         else {
//             res.json({msg:'Session added successfully'});
//         }
//  });

});




router.get('/sessions', function(req, res, next) {
    
    Session.find(function(err, sessions){
    res.json(sessions);
    });
    })
router.delete('/session/:id',(req,res,next)=>{

});

router.get('/formateurs', function(req, res, next) {
    
    Formateurs.find(function(err, sessions){
    res.json(sessions);
    });
    })



module.exports=router; 

