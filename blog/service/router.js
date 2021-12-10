const express = require('express');
const router = express.Router();
const api = require('./api');

router.get('/getValue',(req,res,next) => {
    api.getValue(req,res,next);
})

//登录
router.post("/login",function(req,res,next){
    api.login(req,res,next);
})

//登录
router.get("/space",function(req,res,next){
    api.space(req,res,next);
})
module.exports = router;