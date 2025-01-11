var http = require('http');
http.createServer(function(req,res){
    res.write('Server Created'); //write a response to the client
  res.end(); //end the response
}.listen(6000))