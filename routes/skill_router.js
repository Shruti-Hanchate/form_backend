var express =require('express');
var router =express.Router();
var Skill =require('../Models/skill');

router.get('/', function(req,res,next){
    Skill.getAllSkill(function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});


router.post('/', function(req,res,next){
    Skill.addSkill(req.body, function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});


router.delete('/:empno', function(req,res,next){
    Skill.deleteSkill(req.params.empno, function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});


router.put('/:empno', function(req,res,next){
    Skill.editSkill(req.body,req.params.empno, function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
module.exports=router;