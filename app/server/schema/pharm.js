const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

let pharm_schema = mongoose.Schema({
  role:{type: String,default:'Pharm' },
  uesrname: { type: String },
  password:{ type: String },
});

pharm_schema.pre('save', function(next){

  if(!this.isModified('password'))
    return next();

  bcrypt.hash(this.password,null,null,(err,hash) => {
    if(err)return next(err);
    this.password = hash;
    next();
  });

});

pharm_schema.methods.comparePassword = function(password, callback) {
  bcrypt.compare(password, this.password, function(err, isMatch) {
    if (err) { return callback(err); }
    callback(null, isMatch);
  });
};

module.exports = mongoose.model('Pharmacy', pharm_schema);

