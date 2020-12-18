const { query } = require('express');
var User = require('../models/User');
class UserController {
    createUser(req, res) {
        var postbody = req.body;
        console.log(postbody);
        const user = new User(postbody);
        user.save(function(err, r) {
            res.json(r)
        });
    }
    getUser(req, res) {
        User.find({}, { name: 0 }).sort({ name: "desc" }).exec(function(err, r) {
            res.json(r)
        });
    }
    updateUser(req, res, next) {
        var update = {
            name: "thinhsss",
            age: 1
        }
        User.updateMany({ name: req.params.id }, update, function(err, user) {
            if (err) {
                res.json({
                    error: err
                })
            }
            res.json({
                message: "successfully"
            });
        });
        // .then(() => {
        //     res.json({
        //         message: "successfully"
        //     })
        // })
        // .catch({next});
    }
    deleteUser(req, res) {
        User.deleteOne({ name: req.params.id }, function(err, user) {
            if (err) {
                res.json({
                    error: err
                })
            }
            res.json({
                message: "successfully"
            })
        })
    }
    test(req, res) {
        User.countDocuments({ name: 'thinhsss' }, function(err, r) {
            res.json(r)
        }).exec();

    }
    create(req, res) {
            var arr = req.body;
            User.create(arr, function(error, docs) {
                res.json(docs);
            });
        }
        // [get] age > 0 
    query1(req, res) {
            const query = User.find(); // `query` is an instance of `Query`
            query.where({ age: { $in: [0, 1, 3] } }).exec(function(err, r) {
                res.json(r)
            });
        }
        // [get] queryAll
    queryALl(req, res) {
            const query = User.find(); // `query` is an instance of `Query`
            query.where("name");
            query.all(['thinhsss']);
            query.exec(function(err, r) {
                res.json(r)
            })
        }
        // [get] and
    queryAnd(req, res) {
        const query = User.find(); // `query` is an instance of `Query`
        query.and([{ name: "thinhsss" }, { age: "1" }])
        query.exec(function(err, r) {
            res.json(r)
        })
    }
    count(req, res) {
        const count = User.where({ name: "thinhsss" }).count();
        count.exec(function(err, r) {
            res.json(r);
        })
    }
    equals(req, res) {
        const query = User.find(); // `query` is an instance of `Query`
        // query.where('age').equals(1);
        query.where("name", "thinhsss")
        query.exec(function(err, r) {
            res.json(r)
        })
    }
    testquery(req, res) {
        var query = User.find({ name: "thinhsss" }).where('age').lt(2);
        query.exec()
            .then(r => {
                console.log(r)
            })
            .catch(err => console.log(err))
    }
    addschema(req, res) {
        var user = new User();
        user.add({ color: "string" })
    }
}
module.exports = new UserController;