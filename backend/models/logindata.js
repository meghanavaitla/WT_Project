var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var logindataSchema=new Schema({
Emp_id:String,
Pwd:String
}
);
var login=mongoose.model('login',logindataSchema,'login');
module.exports=login;