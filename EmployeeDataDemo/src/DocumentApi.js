const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const bodyparser = require('body-parser');
const app = express();

app.use(bodyparser.json());
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'',
    database:'SalaryDB'
});

connection.connect(err => {
    if(!err){
        console.log('Db connection succeed');
    }
    else
    {
        console.log('DB connection failed \n Error:'+ JSON.stringify(err, undefined, 2));
    }
});

app.use(cors());

app.get('/Document', (req, res) => {
res.send ('go to /Employee to see ')
});

app.get('/Document/:Employee_Id',(req,res)=>{
    connection.query(`SELECT * FROM Document WHERE Employee_Id = ?`,[req.params.Employee_Id],(err,results) => {
        if(err){
            return res.send(err)
        }
        else{
            return res.json({
                data: results  
            })
        }
    });
});

app.listen(4004, () => {
    console.log(' Products server listening on port 4004')
});