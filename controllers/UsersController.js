const Usermodel = require('../models/User')
const user = require('../models/User')
class UserController{

    static async geralluser(req,res){
        var results = await Usermodel.getusers();
        if(results)
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
        if(id){
            var results = await Usermodel.deleteuser(id)
            if(results)
             res.send("delete done");
            else
             res.send("delete failed");
        }    
    }
    static async updateuser(req,res){
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