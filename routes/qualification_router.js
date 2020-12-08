var express =require('express');
var router =express.Router();
var Qualification =require('../Models/qualification');

router.get('/:id3?', function(req,res, next){

    if(req.params.id3){
        Qualification.getAllQualificationById(req.params.id3, function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        })
    }
    else{
        Qualification.getAllQualification(function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    }
});



// router.get('/', function(req,res,next){
//     Qualification.getAllQualification(function(err,rows){
//         if(err){
//             res.json(err);
//         }
//         else{
//             res.json(rows);
//         }
//     });
// });


router.post('/', function(req,res,next){
    Qualification.addQualification(req.body, function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});


router.delete('/:empno', function(req,res,next){
    Qualification.deleteQualification(req.params.empno, function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

router.delete('/:institute', function(req,res,next){
    Qualification.deleteQualification1(req.params.institute, function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});


router.put('/:empno', function(req,res,next){
    Qualification.editQualification(req.body,req.params.empno, function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
router.put('/:qualification', function(req,res,next){
    Qualification.editQualificationBYQua(req.body,req.params.qualification, function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
module.exports=router;