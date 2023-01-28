const mysql = require("mysql");

//mysql connection
const db = mysql.createPool({
    host:'sql12.freesqldatabase.com',
    user:'sql12593903',
    password:'3306',
    database:'sql12593903',
    port:'3306'
})

db.getConnection(()=>{
    console.log('MSQL successfull connection!');
})

// db.connect((err)=>{
//     if(err){
//         console.log('Errrt connecting to MYSQL database =',err)
//         return
//     }
//     console.log('MSQL successfull connection!');
// })

module.exports = db;