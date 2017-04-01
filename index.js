var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

//创建路由
app.get('/',function(request,response){
    //response.send('Hello world');
    response.sendFile(__dirname + '/index.html');
});

//创建连接
io.on('connection',function(socket){
    socket.on('chat.msg',function(message){
        io.emit('chat.msg',message);
        console.log('a new message' + message);
    });
});

//监听端口
http.listen(11111,function(){
   console.log('Server start');
});