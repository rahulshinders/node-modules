const fs = require("fs");
const http = require('http')

//  JSON Challenge

// const bioData = {
//   name: "Rahul",
//   age: 20,
//   channel: "Rahul Shinde channel",
// };

// const jsonData = JSON.stringify(bioData);
// fs.writeFile("bioData.json", jsonData, (err) => {
//     console.log("done")
// })

// fs.readFile("bioData.json", "utf-8", (err, data) => {
//     const objData = JSON.parse(jsonData)
//     console.log(`JSON : ${data}`)
//     console.log(objData);
// })

// Use API and display data from json file.

// http.createServer((req, res) => {
//     fs.readFile("bioData.json", "utf-8", (err, data) => {
//         const objData = JSON.parse(data);
//         res.writeHead(200, {"Content-type" : "text/html"})
//         res.write(`<h1>${objData.channel}</h1>`)
//         res.end()
//     })
// }).listen(3000, () => {
//     console.log("server running on port 3000")
// })

const student = {
    name: "Rahul Shinde",
    prn : 66 
}

const jsonData = JSON.stringify(student);
// fs.writeFile("student.json", jsonData, (err) => {
//     console.log("Added")
// })

http.createServer((req, res) => {
    fs.readFile("student.json", "utf-8", (err, data) => {
        const objData = JSON.parse(data);
        // for json file write content type will be "application/json"
        res.writeHead(200, {"Content-type" : "application/json"})
        res.write(objData.name)
        res.end()
    })
}).listen(3000);