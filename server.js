const express = require('express');
const app = express();

app.use(express.static(__dirname + '/'));

let port = 8080;
app.listen(port, function() {
    console.log('Express server listening on port ' + port)
});