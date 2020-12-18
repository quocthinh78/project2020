var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var d = new Schema({
    name: { type: String, default: "" },
    email: { type: String, default: "" },
    age: { type: Number, default: "" },
    password: { type: Number, default: "" },
    address: { type: String, default: "" },
    createdDate: { type: Date, default: Date.now },
    modifiedDate: { type: Date, default: "" }
});


module.exports = mongoose.model('Login', d);