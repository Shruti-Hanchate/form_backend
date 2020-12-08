var db=require('../dbConnection');

var Skill={
    getAllSkill:function(callback){
        return db.query('select * from skill',callback);
    },


    addSkill:function(object, callback){
        return db.query('insert into skill values(?,?,?,?,?,?)',
        [object.empno, object.category, object.skill, object.level, object.current, object.experience],callback);
    },

    deleteSkill:function(empno, callback){
        return db.query('delete from skill where empno=?',[empno],callback);
    },

    editSkill:function(object,empno, callback){
        return db.query('update skill set empno=?, category=?, skill=?, level=?, current=?, experience=? where empno=?',
        [object.empno, object.category, object.skill, object.level, object.current, object.experience, object.mpno],callback);
    }
};
module.exports=Skill;