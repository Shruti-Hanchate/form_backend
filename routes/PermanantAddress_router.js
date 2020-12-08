var express =require('express');
var router =express.Router();
var PermanantAddress =require('../Models/PermanantAddress');


router.get('/:id1?', function(req,res, next){

    if(req.params.id1){
        PermanantAddress.getAllPermanantAddById(req.params.id1, function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        })
    }
    else{
        PermanantAddress.getAllPermanantAddress(function(err, rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    }); 
}
});


router.post('/', function(req,res,next){
    PermanantAddress.addPermanantAddress(req.body, function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});


router.delete('/:empno', function(req,res,next){
    PermanantAddress.deletePermanantAddress(req.params.empno, function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});


router.put('/:empno', function(req,res,next){
    PermanantAddress.editPermanantAddress(req.body,req.params.empno, function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
module.exports=router;