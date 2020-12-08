var db=require('../dbConnection');

var Qualification={
    getAllQualification:function(callback){
        return db.query('select * from qualification',callback);
    },


    addQualification:function(object, callback){
        return db.query('insert into qualification values(?,?,?,?,?,?)',
        [object.empno, object.qualification, object.institute, object.passing_year, object.score, object.qualification_area],callback);
    },

    deleteQualification:function(empno, callback){
        return db.query('delete from qualification where empno=?',[empno],callback);
    },

    editQualification:function(object,empno, callback){
        return db.query('update qualification set empno=?, qualification=?, institute=?, passing_year=?, score=?, qualification_area=? where empno=?',
        [object.empno, object.qualification, object.institute, object.passing_year, object.score, object.qualification_area, empno],callback);
    },
    editQualificationBYQua:function(object,qua1, callback){
        return db.query('update qualification set empno=?, qualification=?, institute=?, passing_year=?, score=?, qualification_area=? where qualification=?',
        [object.empno, object.qualification, object.institute, object.passing_year, object.score, object.qualification_area, qua1],callback);
    },
    
    deleteQualification1:function(qualification1, callback){
        return db.query('delete from qualification where institute=?',[qualification1],callback);
    },
    
    getAllQualificationById: function(id3, callback){
        return db.query('select * from presentaddress where qualification=?',[id3], callback);
    },
};
module.exports=Qualification;