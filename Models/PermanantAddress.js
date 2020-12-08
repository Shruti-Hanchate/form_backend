var db=require('../dbConnection');

var PermanantAddress={
    getAllPermanantAddById: function(id1, callback){
        return db.query('select * from permanantaddress where empno=?',[id1], callback);
    },

    getAllPermanantAddress:function(callback){
        return db.query('select * from permanantaddress',callback);
    },


    addPermanantAddress:function(object, callback){
        return db.query('insert into permanantaddress values(?,?,?,?,?,?,?,?,?,?,?)',
        [object.empno, object.permanantAdd, object.city, object.country, object.state, object.district, object.pincode, object.phone1, object.phone2, object.fax, object.personalmailId],callback);
    },

    deletePermanantAddress:function(empno, callback){
        return db.query('delete from permanantaddress where empno=?',[empno],callback);
    },

    editPermanantAddress:function(object,empno, callback){
        return db.query('update permanantaddress set empno=?, permanantAdd=?, city=?, country=?, state=?, district=?, pincode=?, phone1=?, phone2=?, fax=?, personalmailId=? where empno=?',
        [object.empno, object.permanantAdd, object.city, object.country, object.state, object.district, object.pincode, object.phone1, object.phone2, object.fax, object.personalmailId, empno],callback);
    }
};
module.exports=PermanantAddress;