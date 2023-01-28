const db = require('../config/db')
const { deleteuser } = require('../controllers/UsersController')
class Usermodel{

   static async getusers(){

    return new Promise(resolve =>{
    db.query("select * from users",[],(error,results)=>{
       if(!error){
        resolve(results)
       } 
    })
})
    }

    static async adduser(name,email,password){
      return new Promise(resolve=>{
        db.query("insert into users (fullname, email,password) values(?,?,?)",[name,email,password],(err,results)=>{
            if(!err)
            resolve(true)
            else
            console.log("error",err)
            resolve(false)
        })
      })
    }

    static async deleteuser(id){
        return new Promise(resolve=>{
            db.query("delete from users where id = ?",[id],(err,results)=>{
                if(err)
                resolve(false)
                else
                resolve(true)
            })
        })
    }
    static async edit(id,name,email,password){
        return new Promise(resolve=>{
            db.query("update users set fullname=? ,email=?,password=? where id = ?",[name,email,password,id],(err,results)=>{
                if(!err)
                resolve(results)
            })
       
        })
    }
}

module.exports = Usermodel