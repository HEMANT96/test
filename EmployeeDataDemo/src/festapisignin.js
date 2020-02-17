const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

const SELECT_ALL_Login_QUERY = 'SELECT * FROM Login';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rgbxyz@123',
    database: 'SalaryDB'
});


connection.connect(err => {
    if(err){
        return err;
    }
});

console.log(connection);

app.use(cors());

app.get('/Login', (req, res) => {
res.send('go to /Login to see ')
});

app.get('/Login/add', (req, res) => {
    const { login_id, password } = req.query;
    const INSERT_Login_QUERY = `INSERT INTO Login (login_id,password) VALUES('${login_id}','${password}')`;
    connection.query(INSERT_Login_QUERY,(err,results) => {
        if(err){
            return res.send(err)
        }
        else{
            return res.send('successfully added product')
        }
        console.log(results);
    });
});

app.get('/Login', (req, res) => {
connection.query(SELECT_ALL_Login_QUERY, (err, results) => {
    if(err){
        return res.send(err)
    }
    else {
        return res.json({
            data: results
     })
    }
  });
});

app.listen(4002, () => {
    console.log(' Products server listening on port 4002')
});
