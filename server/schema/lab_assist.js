const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

let labAssist_schema = mongoose.Schema({
  role:{type: String,default:'LabAssist' },
  username: { type: String },
  password:{ type: String },
});

labAssist_schema.pre('save', function(next){

  if(!this.isModified('password'))
    return next();

  bcrypt.hash(this.password,null,null,(err,hash) => {
    if(err)return next(err);
    this.password = hash;
    next();
  });

});

labAssist_schema.methods.comparePassword = function(password, callback) {
  bcrypt.compare(password, this.password, function(err, isMatch) {
    if (err) { return callback(err); }
    callback(null, isMatch);
  });
};

module.exports = mongoose.model('LabAssists', labAssist_schema);

