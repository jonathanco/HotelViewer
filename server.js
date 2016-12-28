var express=require('express');
var app = express();

// app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/js', express.static(__dirname + '/js'));
// app.use('/css', express.static(__dirname + '/css'));
app.use('/views', express.static(__dirname + '/views'));

app.use('/', express.static('./'));
app.listen(process.env.PORT || 3000);
console.log('server listening on port '+ process.env.PORT+'/3000 ...');