var db=require('../dbConnection');

var Previousemp={
    getAllPreviousemp:function(callback){
        return db.query('select * from previousemp',callback);
    },


    addPreviousemp:function(object, callback){
        return db.query('insert into previousemp values(?,?,?,?,?,?,?)',
        [object.empno, object.fromDate, object.toDate, object.company, object.designation, object.relevant, object.nrelevant],callback);
    },

    deletePreviousemp:function(empno, callback){
        return db.query('delete from previousemp where empno=?',[empno],callback);
    },

    editPreviousemp:function(object,empno, callback){
        return db.query('update previousemp set empno=?, fromDate=?, toDate=?, company=?, designation=?, relevant=?, nrelevant=? where empno=?',
        [object.empno, object.fromDate, object.toDate, object.company, object.designation, object.relevant, object.nrelevant, empno],callback);
    }
};
module.exports=Previousemp;