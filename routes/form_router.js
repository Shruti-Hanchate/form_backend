var express =require('express');
var router =express.Router();
var Form =require('../Models/Form');

router.get('/:id?', function(req,res,next){
    if(req.params.id){
        Form.getBasicInfoById(req.params.id, function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    }
    else{
    Form.getAllForm(function(err,rows){
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
    Form.addForm(req.body, function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});


router.delete('/:empno', function(req,res,next){
    Form.deleteForm(req.params.empno, function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});


router.put('/:empno', function(req,res,next){
    Form.editForm(req.body,req.params.empno, function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
module.exports=router;