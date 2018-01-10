const express= require('express'); 
const router= express.Router(); 
const Session= require ('../models/sessions');
const Formateurs= require ('../models/formateurs');
const Participants= require ('../models/participants');
var bodyParser=require('body-parser');
router.use(bodyParser.json());



// Add Session
router.post('/sessions', (req, res, next)=>{
 let newSession=new Session();
 newSession.name=req.body.name;

 newSession.track=req.body.track;
 newSession.Date=req.body.Date;
 newSession.local=req.body.local;
 newSession.duree=req.body.duree;
 newSession.participants=req.body.participants;
 newSession.isCompleted=false;
 console.log(newSession)
 newSession.save((err,session)=> {
     if (err) {
         res.send('erreeeeeur');
     }
        else {
            res.json({msg:'Session added successfully'});
        }
 });

});



// Get Sessions List
router.get('/sessions', function(req, res, next) {
    
    Session.find(function(err, sessions){
    res.json(sessions);
    });
    })

// Get Sessions Size
router.get('/sessions/size', function(req, res, next) {
    
    Session.count(function(err, sessions){
    res.json(sessions);
    });
    })

     // Get Session By Id
   router.get("/session/:id", function (req, res,next) {
             console.log(req.params.id);
             Session.find({_id:req.params.id},function (err,data) {
                 if (!err) {
                 res.json(data);

                 }
             });
         });


    //   Update Session

    router.put('/update/:id', (req,res)=> {
        Session.update({_id:req.params.id},{
            $set: {
               name: req.body.name, 
               track: req.body.track, 
               date:req.body.date, 
               duree:req.body.duree, 
               adress:req.body.adress,
               participants:req.body.participants,
               isCompleted:req.body.isCompleted, 
            }
        },
        (err,result) => {
            if (err) return res.send(err)
                res.send(result)
        }
    );
    }); 

    
    // Supprimer Session 

    router.delete('/session/:id', (req,res,next)=> {
     
        Session.remove({_id:req.params.id}, function (err,result){
            if(err) {
                res.json(err); 
            }
            else {
                res.json(result);
           
            }
        });
    });

//  Get Formateurs 
router.get('/formateurs', function(req, res, next) {
    
    Formateurs.find(function(err, formateurs){
    res.json(formateurs);
    }).sort({note: -1 });
    })

    // Get Formateurs Size
router.get('/formateurs/size', function(req, res, next) {
    
    Formateurs.count(function(err, sessions){
    res.json(sessions);
    });
    })
  // Get formateur By Id
   router.get("/formateur/:id", function (req, res,next) {
             console.log(req.params.id);
             Formateurs.find({_id:req.params.id},function (err,data) {
                 if (!err) {
                 res.json(data);

                 }
             });
         });


    // Add formateur

    router.post('/formateur', (req, res, next)=>{
 let newFormateur=new Formateurs();
 console.log(req.body)
 newFormateur.name=req.body.name;
 newFormateur.note=req.body.note;
console.log("formateur")
 console.log(newFormateur.note)
 newFormateur.save((err,formateur)=> {
     if (err) {
         res.send('erreeeeeur');
     }
        else {
            res.json({msg:'Formateur added successfully'});
        }
 });

});


   
    // Supprimer Formateur 

    router.delete('/formateur/:id', (req,res,next)=> {
        Formateurs.remove({_id:req.params.id}, function (err,result){
            if(err) {
                res.json(err); 
            }
            else {
                res.json(result);
                console.log("succès!!!!!!")
            }
        });
    });

// -----------------------------------------------------------------------------
//  Get Participants 
router.get('/participants', function(req, res, next) {
    
    Participants.find(function(err, participants){
    res.json(participants);
    });
    })

        // Get Participants Size
router.get('/participants/size', function(req, res, next) {
    
    Participants.count(function(err, sessions){
    res.json(sessions);
    });
    })
    // Add Participant

    router.post('/participant', (req, res, next)=>{
 let newParticipant=new Participants();

 newParticipant.name=req.body.name;
 newParticipant.save((err,participant)=> {
     if (err) {
         res.send('erreeeeeur');
     }
        else {
            res.json({msg:'Participant added successfully'});
        }
 });

});


    // Supprimer Participant 

    router.delete('/participant/:id', (req,res,next)=> {
        Participants.remove({_id:req.params.id}, function (err,result){
            if(err) {
                res.json(err); 
            }
            else {
                res.json(result);
                console.log("succès!!!!!!")
            }
        });
    });



module.exports=router; 

