var express = require('express');

var port = process.env.PORT || 3001;

var app = express();

 var mysql      = require('mysql');

var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'root',
        database : 'quiz'
    });

  connection.connect();


app.post('/login', function (req, res) {
    connection.query('INSERT INTO login SET ?', req.body, 
        function (err, result) {
            if (err) throw err;
            //res.send('User added to database with ID: ' + result.insertId);
        }
    );
});
// Static files
app.use(express.static(__dirname + '/public')); 



app.listen(port);
console.log('listening on port ' + port);