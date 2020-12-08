var express =require('express');
var router =express.Router();
var PresentAddress =require('../Models/presentaddress');

router.get('/:id2?', function(req,res, next){

    if(req.params.id2){
        PresentAddress.getAllPresentAddressById(req.params.id2, function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        })
    }
    else{
        PresentAddress.getAllPresentAddress(function(err, rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    }); 
}
});


router.get('/', function(req,res,next){
    PresentAddress.getAllPresentAddress(function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});


router.post('/', function(req,res,next){
    PresentAddress.addPresentAddress(req.body, function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});


router.delete('/:empno', function(req,res,next){
    PresentAddress.deletePresentAddress(req.params.empno, function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});


router.put('/:empno', function(req,res,next){
    PresentAddress.editPresentAddress(req.body,req.params.empno, function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
module.exports=router;