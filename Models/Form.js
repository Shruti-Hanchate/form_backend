var db=require('../dbConnection');

var Form={
    getAllForm:function(callback){
        return db.query('select * from form',callback);
    },
    getBasicInfoById: function(id, callback){
        return db.query('select * from form where empno=?',[id], callback);
    },
    addForm:function(object, callback){
        return db.query('insert into form values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
        [object.empno,object.title,object.initial,object.fname,object.mname,object.lname,object.gender,object.dob,object.Eage,object.officephone,object.personalMobile,object.officemail,object.personalmail1,object.personalmail2,object.personalmail3,object.photo,object.birth,object.domicile,object.religion,object.caste,object.nationality,object.overid,object.panno,object.adharno,object.marriage,object.child,object.date,object.sname,object.bankname,object.accnttype,object.paymenttype,object.accountno,object.branch,object.ifsc,object.rbanknm,object.raccntno],callback);
    },

    deleteForm:function(empno, callback){
        return db.query('delete from form where empno=?',[empno],callback);
    },

    editForm:function(object,empno, callback){
        return db.query('update form set empno= ?, title= ?, initial= ?, fname= ?, mname= ?, lname= ?, gender= ?, dob= ?, Eage= ?, officephone= ?, personalMobile= ?, officemail= ?, personalmail1= ?, personalmail2= ?, personalmail3= ?, photo= ?, birth= ?, domicile= ?, religion= ?, caste= ?, nationality= ?, overid= ?, panno= ?, adharno= ?, marriage= ?, child= ?, date= ?, sname= ?, bankname= ?, accnttype= ?, paymenttype= ?, accountno= ?, branch= ?, ifsc= ?, rbanknm= ?, raccntno=? where empno=?',
        [object.empno,object.title,object.initial,object.fname,object.mname,object.lname,object.gender,object.dob,object.Eage,object.officephone,object.personalMobile,object.officemail,object.personalmail1,object.personalmail2,object.personalmail3,object.photo,object.birth,object.domicile,object.religion,object.caste,object.nationality,object.overid,object.panno,object.adharno,object.marriage,object.child,object.date,object.sname,object.bankname,object.accnttype,object.paymenttype,object.accountno,object.branch,object.ifsc,object.rbanknm,object.raccntno, empno],callback);
    },
   
};
module.exports=Form;