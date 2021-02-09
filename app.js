require('./models/index')
const db = require('./models') 
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// const signup = async () => {
//     await db.sequelize.query('CALL signup(:userName, :password, :stock, :fname, :lname, :type, :nationalId, :phone, :address)', 
//         {replacements: { userName: "fateme", password: 'test', stock: "24", fname: 'faezeh', lname: 'lname', type: 'student', nationalId: '0521254140', phone: '09395363672', address:'iran-tehran-mirdamad'}})
//     .then(v=>console.log(v));
// }

// signup()


var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: 'library_development'
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});


let sql = `CALL signup(?,?,?,?,?,?,?,?,?)`;

con.query(sql, ['faeezh', 'test', 30.33 , 'sahar', 'naeimi', 'student', '0521254140', '09395363672', 'iran-arak'], (error, results, ) => {
  if (error) {
    return console.error(error.message);
}
con.end();



// const wellcomStr = 'wellcome to the Library platForm!\n1)Login\n2)signup\n'
// rl.question(wellcomStr, function(choose) {
//     if(choose==='2' || choose==='signup' || choose==='Sginup') {
//         rl.question("Whats your name? ", function(fname) {
//             rl.question("Whats your family name? ", function(lname) {
//                 rl.question("Whats your nationalId? ", function(nationalId) {
//                     rl.question("Whats your phoneNumber? ", function(phone) {
//                         rl.question("Whats your address? ", function(address) {
//                             rl.question("choose a password: ", function(password) {
//                                 rl.question("choose a unique username: ", function(username) {
//                                     console.log(fname,'/', lname,'/', nationalId , '/', phone, '/', address, '/', password, '/', username)
//                                     // db.Sequelize.query('CALL c();').spread(
//                                     //     function (settingName1, settingName2, settingName3, users) {
//                                     // });

//                                     db.Sequelize
//                                         .query('CALL signup (:userName, :password, :stock, :fname, :lname, :type, :nationalId, :phone, :address)', 
//                                                 {replacements: { userName: "faezeh", password: 'test', stock: "24", fname: 'faezeh', lname: 'lname', type: 'student', nationalId: '0521254140', phone: '09395363672', address:'iran-tehran-mirdamad'}})
//                                         .then(v=>console.log(v));
//                                     rl.close();
//                                 })
//                             })
//                         })
//                     })
//                 })
//             })
           
//         });
//     }
//     if(choose==='1' || choose==='login' || choose==='Login') {
//         rl.question("username: " , function(username) {
//             rl.question("password: ", function(password) {
//                 console.log(username, '/' , password)
//                 rl.close();
//             })
           
//         });
//     }
// });

rl.on("close", function() {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});

// module.exports = app