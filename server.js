const http = require('http')
const server = http.createServer(function (req, res){
    res.write("hello");
    res.end()
})
server.listen(1111,function (){
    console.log("server running at localhost:1111")
})