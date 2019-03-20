const express = require('express');
app = express()
app.use(express.static(__dirname))

server = app.listen(3000,_=>{
	console.log('Server at IP localhost:3000');
});
