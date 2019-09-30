//Useful for manipulating MySQL databases
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    //port: '3306',
    user: "root",
    /*This is the password for the laptop itself or the password set for
    MySQL itself
    */
    password: "safehaven",
    database: "Fina_Directory"
});

con.connect(function(err){
    if (err) throw err;
    console.log("Connected!");
    /* This is the code necessary to create a Database within MySQL
    con.query("CREATE DATABASE Fina_Directory", function (err, result){
        if(err) throw err;
        console.log ("Fina's DataBase created");
    });*/

    var sql = "CREATE TABLE packages (first_name varchar(225), last_name varchar(225), DOB int (11))";
    con.query(sql, function (err, result){
        if(err) throw err;
        console.log("Table created!");
    });
});


/*
$host="localhost";
 $port=3306;
 //$socket="";
 $user="root";
 $password="";
 */
