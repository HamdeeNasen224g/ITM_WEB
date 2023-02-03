const Usermodel = require('../models/User')
const user = require('../models/User')
const {validationResult} = require("express-validator")
class UserController{

    static async getalluser(req,res){
        var results = await Usermodel.getusers();
        if(results)
        console.log(results)
        res.send(results)
   
    }

    static async addnewusers(req,res){
        var name = req.body.name
        var email = req.body.email
        var password = req.body.password
        var x = await Usermodel.adduser(name,email,password)
        if(x == true){
            res.send("add user successfully")
        }else{
            res.send("add user fialed")
        }
    }
    static async deleteuser(req,res){
        const id = req.body.id;
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            res.json(errors.array())
        }else{     
        if(id){
            var results = await Usermodel.deleteuser(id)
            if(results)
             res.send("delete done");
            else
             res.send("delete failed");
        }  
    }  
    }
    static async updateuser(req,res){

        console.log("edit user ")

        const id = req.body.id;
        const newname = req.body.name;
        const newemail = req.body.email;
        const newPassword = req.body.password;
        var x = await Usermodel.edit(id,newname,newemail,newPassword);
        if(x)
        res.send("data edited successful")
        else
        res.send("data edited failed")
    }
    
}

module.exports = UserController