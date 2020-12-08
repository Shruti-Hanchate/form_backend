var db=require('../dbConnection');

var PresentAddress={
    getAllPresentAddressById: function(id2, callback){
        return db.query('select * from presentaddress where empno=?',[id2], callback);
    },
    getAllPresentAddress:function(callback){
        return db.query('select * from presentaddress',callback);
    },


    addPresentAddress:function(object, callback){
        return db.query('insert into presentaddress values(?,?,?,?,?,?,?,?,?,?,?)',
        [object.empno, object.presentAdd, object.pcity, object.pcountry, object.pstate, object.pdistrict, object.ppincode, object.pphone1, object.pphone2, object.pfax, object.ppersonalmailId],callback);
    },

    deletePresentAddress:function(empno, callback){
        return db.query('delete from presentaddress where empno=?',[empno],callback);
    },

    editPresentAddress:function(object,empno, callback){
        return db.query('update presentaddress set empno=?, presentAdd=?, pcity=?, pcountry=?, pstate=?, pdistrict=?, ppincode=?, pphone1=?, pphone2=?, pfax=?, ppersonalmailId=? where empno=?',
        [object.empno, object.presentAdd, object.pcity, object.pcountry, object.pstate, object.pdistrict, object.ppincode, object.pphone1, object.pphone2, object.pfax, object.ppersonalmailId, empno],callback);
    }
};
module.exports= PresentAddress;