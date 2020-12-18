const { query } = require('express');
var User = require('../models/User');
class UserController {
    createUser(req, res) {
        var postbody = req.body;
        var email = postbody.email;
        User.find({ "email": email }).exec(function(err, r) {
            if (r) {
                res.json("Tài khoản đã tồn tại");
            } else {
                const user = new User(postbody);
                user.save(function(err, r) {
                    res.json(r);
                });
            }
        })
    }
    getUser(req, res) {
        User.find({}, { name: 0 }).sort({ name: "desc" }).exec(function(err, r) {
            res.json(r);
        });
    }
}
module.exports = new UserController;