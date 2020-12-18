const { query } = require('express');
var Login = require('../models/User');
class loginController {
    getUser(req, res) {
        User.find({}, { name: 0 }).sort({ name: "desc" }).exec(function(err, r) {
            res.json(r)
        });
    }
    registerUser(req, res) {
        var postbody = req.body;
        console.log(postbody);
        const user = new Login(postbody);
        user.save(function(err, r) {
            res.json(r)
        });
    }
}
module.exports = new loginController;