var express =require('express');
var router =express.Router();
var Previousemp =require('../Models/previousemp');

router.get('/', function(req,res,next){
    Previousemp.getAllPreviousemp(function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});


router.post('/', function(req,res,next){
    Previousemp.addPreviousemp(req.body, function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});


router.delete('/:empno', function(req,res,next){
    Previousemp.deletePreviousemp(req.params.empno, function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});


router.put('/:empno', function(req,res,next){
    Previousemp.editPreviousemp(req.body,req.params.empno, function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
module.exports=router;