var express = require('express')
var router = express.Router();
var UserController = require("../controllers/UserController");


router.get("/user", UserController.getUser);
router.post("/user", UserController.createUser);
router.put("/user/:id/update", UserController.updateUser);
router.delete("/user/:id/delete", UserController.deleteUser);
router.post("/test", UserController.create);
router.get("/test", UserController.test);
// router.post("/test", UserController.test);
//query
router.get("/query1", UserController.query1);
router.get("/queryAll", UserController.queryALl);
router.get("/queryand", UserController.queryAnd);
router.get("/count", UserController.count);
router.get("/equals", UserController.equals);
router.get("/testquery", UserController.testquery);
// schema
router.post("/addschema", UserController.addschema)
module.exports = router;