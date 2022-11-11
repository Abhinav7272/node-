// const amount = 12 
// if(amount< 10 ){
//     console.log("small")
// }else{
//     console.log("large")
// }

// console.log('its my first app')   


// Global variable -- NO WINDOW !!! -- anywere you can access them 
// __dirname , __filename, require, module, process 

// console.log(__dirname)

// setInterval(()=>{
//  console.log('hello')
// },1000)

// Modules in Node splitting code into files 
// const sayHi = (name) => {
//     console.log(`hi ${name}`)
// }

// module.exports = sayHi

// sayHi('john')


// common js , every file is module 



// Built-in Module 
// os path fs http




// // OS MODULE -- builtin mudule 
// const os = require('os')

// // info about user
// const usr = os.userInfo()

// console.log(usr)
// // up time of system 

// console.log(`system up time ${os.uptime()}`)

// const currentOs ={
//     name : os.type(), 
//     release : os.totalmem(),
// }

// console.log(currentOs)


// Path Module 
// const path = require("path")

// console.log(path.sep)
// const absolute = path.resolve(__dirname)
// console.log(absolute)

//fs module 

// const {readFileSync, writeFileSync} = require('fs');

// async 

// const { readFile, writeFile } = require('fs')

// readFile('./Module/first.txt', 'utf8', (err, result) => {
//     if (err) {
//         console.log(err);
//         return
//     }
//     const first = result;
//     readFile('./Module/first.txt', 'utf8', (err, result) => {
//         if (err) {
//             console.log(err)
//             return
//         }
//         const second = result
//         writeFile('./Module/result.txt', 'here is new file' , (err, result)=>{
//             if(err){
//                 console.log(err);
//                 return;
//             }
//             console.log(result)
//         })
//     })
//     console.log('task is running')
// })

// console.log('task is over')
// Async -- together for multiple users  // async Await or promises is alternative 


//sync -- one by one for multiple users  
// const first = readFileSync('./Module/first.txt','utf8');

// console.log(first);

// writeFileSync('./Module/first.txt','here is the result', {flag : 'a'})

// sync



// http module - server side 
// web server -- creating Apis 

// 



// npm install -g <package name>
// for package.json 
// npm init 
// npm inti -y 



const _ = require('lodash')
const items = [1,[1,3],3,4]
const newItems= _.flattenDeep(items)
console.log(newItems)
