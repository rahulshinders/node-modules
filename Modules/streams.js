const http = require("http");
const fs = require("fs");

const server = http.createServer();

server.on('request', (req, res) => {
    // fs.readFile('input.txt', (err, data) => {
    //     if(err) return console.log(err);
    //     res.end(data);
    // })

    // this stream reads the given file input.txt
    // const rdStream = fs.createReadStream('input.txt')
    // That data is stored in chunkData and will be shown on the browswer
    // rdStream.on('data', (chunkData) => {
    //     res.write(chunkData); 
    // })
    // This is to show error if file does exist
    // rdStream.on('end', () => {
    //     res.end()
    // })
    // rdStream.on('error', (err) => {
    //     console.log(err)
    //     res.end('File not found!')
    // })

    const rdStream = fs.createReadStream('input.txt')
    rdStream.pipe(res);

})

server.listen(3000);