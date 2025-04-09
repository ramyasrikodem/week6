var express = require("express")
var app = express()
var port = process.env.port || 8080
const mongoose = require('mongoose');
const controller=require('../controller/controller')
const router=express.Router()

router.get('/home', async (req, res) => {
    
    controller.content(req,res)

});

module.exports=router