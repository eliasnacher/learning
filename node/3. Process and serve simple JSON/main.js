const http = require('http');
const fs = require('fs');

let jsonRawData = fs.readFileSync('restaurant.json')
let jsonData = JSON.parse(jsonRawData); 

jsonData.owner = 'Elias Nacher';

console.log('Server started at http://localhost:8080')  
http.createServer(function (req, res) {
  res.writeHead(200, {'ContentType': 'application/json'})
  res.write(JSON.stringify(jsonData))
  res.end()
}).listen(8080)
