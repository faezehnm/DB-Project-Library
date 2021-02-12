require('./models/index')
const db = require('./models') 
const readline = require('readline')
const jwt = require("jsonwebtoken")
const jwtKey = "my_secret_key"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.on("close", function() {
    console.log("\nBYE BYE !!!");
    process.exit(0);
})

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: 'library_development',
  multipleStatements: true
})

con.connect(function(err) {
    if (err) throw err;
    // console.log("database Connected!");
})

const signup = data=> {
    
    let sql = `CALL signup(?,?,?,?,?,?,?,?,?,@output); SELECT @output`
    // const data = ['sahari2i', 'test1234', 30.33 , 'sahar', 'naeimi', 'student', '0521254140', '09395363672', 'iran-arak']
    con.query(sql,
        data,
        (error, results,fields ) => {
            if (error) {
                return console.error(error.message);
            }
            const message = JSON.parse(JSON.stringify(results[1]));
            const outMessage = Object.values(message[0])[0]
            console.log( outMessage )

            if ( outMessage === 'USERNAME is taken!!') console.log('plesae choose another username.')
            if ( outMessage === 'USERNAME length is not enough!!') console.log('username length shold be more than 6.')
            if ( outMessage === 'PASSWORD length is not enough!!') console.log('password length shold be more than 8.')
            if ( outMessage === 'PASSWORD is easy!!') console.log('it should has bothcharachter and digit.')
            if ( outMessage === 'register successFull') console.log('now you can log in!')
        })
}

const currentUserType = async () => {
    let type = null

    let sql = `CALL currentUserType(@output); SELECT @output; `
   
    await con.query(sql,
        [],
        (error, results,fields ) => {
            if (error) {
                return console.error(error.message);
            }
            const message = JSON.parse(JSON.stringify(results[1]));
            const outMessage = Object.values(message[0])[0]
            // console.log( outMessage )
            type = outMessage
        })
    return(type)
}

const searchBook = data => {
    let sql = `CALL searchBook(?)`
    // const data = ['sahari2i', 'test1234', 30.33 , 'sahar', 'naeimi', 'student', '0521254140', '09395363672', 'iran-arak']
    con.query(sql,
        data,
        (error, results,fields ) => {
            if (error) {
                return console.error(error.message);
            }
            console.log(results)
        })
}

const getBook = data => {
    let sql = `CALL getBook(?,@output); SELECT @output`
    
    con.query(sql,
        data,
        (error, results,fields ) => {
            if (error) {
                return console.error(error.message);
            }
            const message = JSON.parse(JSON.stringify(results[1]));
            const outMessage = Object.values(message[0])[0]
            console.log( outMessage )

            if ( outMessage === 'successfull borrow!!') console.log('you should return book after 1 month, so if ypu do not return, after 4 time dalay for 4 month you can not borrow any book from librrary.')
            if ( outMessage === 'We do not have this book in repository know!!') console.log('you can choose another book.')
            if ( outMessage === 'No enough account stock!!') console.log('you can increase your stock.')
            if ( outMessage === 'you do not have access to this book') {
                console.log('you have access to all category instead refrence.')
                console.log('you can choose another book.')
            }
        
        })
}

const getUserInfo = ()=>{
    console.log('innnnn')
    let sql = `CALL getUserInfo()`

    con.query(sql , [],
        (error, results,fields ) => {
            if (error) {
                return console.error(error.message)
            }
            const message = JSON.parse(JSON.stringify(results[0][0]));
            console.log('you can see your information: ')
            console.log( message )
    })

}

const returnBook = data => {
    let sql = `CALL returnBook(?,@output); SELECT @output;`
    
    con.query(sql,
        data,
        (error, results,fields ) => {
            if (error) {
                return console.error(error.message);
            }

            const message = JSON.parse(JSON.stringify(results[1]));
            const outMessage = Object.values(message[0])[0]
            console.log( outMessage )
        
        })
}

const handleUserAction = action =>{
    if(action === '1' ) {
        getUserInfo()
    }

    if(action === '2' ) {
        rl.question("bookId : ", function(bookId) {
            getBook([bookId])
        })  
    }

    if(action === '3' ) {
        rl.question("search book : ", function(book) {
            searchBook([book])
        })
    }

    if(action === '4' ) {
        rl.question("return book : ", function(book) {
            returnBook([book])
        })
    }

    if(action === '5' ) {
        rl.question("price : ", function(price) {
            increseStock([price])
        })
    }
}

const userPortal = data => {
    console.log('welcome to portal.')
    console.log('1) user information \n')
    console.log('2) borrow book \n')
    console.log('3) search book \n')
    console.log('4) return book \n')
    console.log('5) increase stock \n')

    rl.question("choose your action : ", function(action) {
        handleUserAction(action)
    })
}

const increseBook = data => {
    let sql = `CALL increaseBook(?,?,?,?,?,?,?,?,?,?,?,@output); SELECT @output;`
    
    con.query(sql,
        data,
        (error, results,fields ) => {
            if (error) {
                return console.error(error.message);
            }
            const message = JSON.parse(JSON.stringify(results[1]));
            const outMessage = Object.values(message[0])[0]
            console.log( outMessage )

        })
}

const seeRequest = data => {
    let sql = `CALL seeRequest(?,@output); SELECT @output;`
    
    con.query(sql,
        data,
        (error, results,fields ) => {
            if (error) {
                return console.error(error.message);
            }

            console.log( results[0] )

        })
}

const searchUser = data => {
    let sql = `CALL searchUser(?,?,@output); SELECT @output;`
    
    con.query(sql,
        data,
        (error, results,fields ) => {
            if (error) {
                return console.error(error.message);
            }

            console.log(results[0])
        })
}

const seeUserTotalInfo = data => {
    let sql = `CALL seeUserTotalInfo(?, @output); SELECT @output;`
    
    con.query(sql,
        data,
        (error, results,fields ) => {
            if (error) {
                return console.error(error.message);
            }

            console.log(results[0])

        })
}

const deleteAccount = data => {
    let sql = `CALL deleteAccount(?,@output); SELECT @output;`
    
    con.query(sql,
        data,
        (error, results,fields ) => {
            if (error) {
                return console.error(error.message);
            }

            const message = JSON.parse(JSON.stringify(results[1]));
            const outMessage = Object.values(message[0])[0]
  
            if( outMessage === 'you have access!!') console.log('delete account successfully')

        })
}

const handleAdminAction = action =>{
    if(action === '1' ) {
        rl.question("bookId: ", function(bookId) {
        rl.question("num: ", function(num) {
        rl.question("title: ", function(title) {
        rl.question("writer: ", function(writer) {
        rl.question("publisher: ", function(publisher) {
        rl.question("category: ", function(category) {
        rl.question("page: ", function(page) {
        rl.question("price: ", function(price) {
        rl.question("section: ", function(section) {
        rl.question("tiraj: ", function(tiraj) {
        rl.question("publish date: ", function(publishDate) {
            increseBook([bookId, num, title, writer, publisher, category, page, price, section, tiraj, publishDate])  
        }) })})})}) })})}) }) })})
    }

    if(action === '2' ) {
        rl.question("page: ", function(page) {
            seeRequest([page])
        }) 
    }

    if(action === '3' ) {
        rl.question("user name or fimily name: ", function(name) {
            rl.question("page: ", function(page) {
                searchUser([name,page])
            }) 
        }) 
    }

    if(action === '4' ) {
        rl.question("username: ", function(username) {
            seeUserTotalInfo([username])
        }) 
    }

    if(action === '5' ) {
        rl.question("username: ", function(username) {
            deleteAccount([username])
        }) 
      
    }
}

const adminPortal = data => {
    console.log('welcome to portal.')
    console.log('1) increase book \n')
    console.log('2) success borrow history \n')
    console.log('3) search user \n')
    console.log('4) user history \n')
    console.log('5) delete account \n')

    rl.question("choose your action : ", function(action) {
        handleAdminAction(action)
    })
}

const login = data=> {
    let sql = `CALL login(?,?,@output); SELECT @output`

    con.query(sql,
        data,
        (error, results,fields ) => {
            if (error) {
                return console.error(error.message);
            }
            const message = JSON.parse(JSON.stringify(results[1]));
            const outMessage = Object.values(message[0])[0]
            console.log( outMessage )

            if ( outMessage === 'PASSWORD and USERNAME did not match!!') {
                 console.log('plesae enter username and password correct.')
                 rl.question("username: " , function(username) {
                    rl.question("password: ", function(password) {
                        login([username, password])
                    })   
                });
            }

            if ( outMessage === 'LOGIN successful') { 
                // userPortal()
                adminPortal()
            }
        
        })
}



// getUserInfo()
// login()
// getBook([3])
// searchBook(['expensive'])
// returnBook([2])
// increseStock([-2])
// seeUserTotalInfo(['faezeh_nm'])
// searchUser(['naeimi', '0'])
// seeRequest([0])
// increseBook(["","30","backbook","","","", "", "", "", "", ""])

// const show = async ()=>{
//     const type = await currentUserType()
//     console.log('-----')
//     console.log(type)
// }

// show()




const wellcomStr = 'wellcome to the Library platForm!\n1)Login\n2)signup\n'

rl.question(wellcomStr, function(choose) {
    if(choose==='2' || choose==='signup' || choose==='Sginup') {
        rl.question("Whats your name? ", function(fname) {
            rl.question("Whats your family name? ", function(lname) {
                rl.question("Whats your nationalId? ", function(nationalId) {
                    rl.question("Whats your phoneNumber? ", function(phone) {
                        rl.question("Whats your address? ", function(address) {
                            rl.question("choose a unique username: ", function(userName) {
                            rl.question("choose a password: ", function(password) {
                                    rl.question("say your job", function(type) {
                                        
                                        signup([userName, password, 0, fname, lname, type, nationalId, phone, address])
                                        // rl.close()       
                                }
                                )
                            }
                                
                            )})
                        })
                    })
                })
            })
           
        });
    }
    if(choose==='1' || choose==='login' || choose==='Login') {
        rl.question("username: " , function(username) {
            rl.question("password: ", function(password) {
                login([username, password])
                // rl.close();
            })
           
        });
    }
});






// con.end();
