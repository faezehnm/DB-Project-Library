require('./models/index') // connect to DB
const { Console } = require('console');
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const wellcomStr = 'wellcome to the Library platForm!\n1)Login\n2)signup\n'
rl.question(wellcomStr, function(choose) {
    if(choose==='2' || choose==='signup' || choose==='Sginup') {
        rl.question("Whats your name? ", function(fname) {
            rl.question("Whats your family name? ", function(lname) {
                rl.question("Whats your nationalId? ", function(nationalId) {
                    rl.question("Whats your phoneNumber? ", function(phone) {
                        rl.question("Whats your address? ", function(address) {
                            rl.question("choose a password: ", function(password) {
                                rl.question("choose a unique username: ", function(username) {
                                    console.log(fname,'/', lname,'/', nationalId , '/', phone, '/', address, '/', password, '/', username)
                                    rl.close();
                                })
                            })
                        })
                    })
                })
            })
           
        });
    }
    if(choose==='1' || choose==='login' || choose==='Login') {
        rl.question("username: " , function(username) {
            rl.question("password: ", function(password) {
                console.log(username, '/' , password)
                rl.close();
            })
           
        });
    }
});

rl.on("close", function() {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});

// module.exports = app