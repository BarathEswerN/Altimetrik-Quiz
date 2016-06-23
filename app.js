// Module dependencies

var express    = require('express'),
    mysql      = require('mysql');
var path = require('path');
// Application initialization

var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'root'
    });
    
var app = module.exports = express.createServer();

// Database setup

connection.query('CREATE DATABASE IF NOT EXISTS quiz', function (err) {
    if (err) throw err;
    connection.query('USE quiz', function (err) {
        if (err) throw err;
        connection.query('CREATE TABLE IF NOT EXISTS login('
            + 'id INT NOT NULL AUTO_INCREMENT,'
            + 'PRIMARY KEY(id),'
            + 'name VARCHAR(30)'
            +  ')', function (err) {
                if (err) throw err;
            });
    });
});

// Configuration

app.use(express.bodyParser());

// Main route sends our HTML file

app.get('/', function(req, res) {
    // res.sendfile( '/index.html' , {root:__dirname});
   app.use(express.static(path.join(__dirname, '/public')));
   //res.sendFile(path.join(__dirname + '/index.html'));
});

// Update MySQL database

app.post('/login', function (req, res) {
    // connection.query('INSERT INTO users SET ?', req.body, 
    //     function (err, result) {
    //         if (err) throw err;
    //         res.send('User added to database with ID: ' + result.insertId);
    //     }
    // );
});

// Begin listening

app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);