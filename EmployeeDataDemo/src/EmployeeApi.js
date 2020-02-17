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

//console.log(connection);

app.use(cors());

app.get('/Employee', (req, res) => {
res.send ('go to /Employee to see ')
});

app.get('/Employee/add', (req, res) => {
    const { Employee_Name, Employee_Id, Accoubt_No, IFSC_Code, Account_Name, Bank_Name } = req.query;
    const INSERT_Employee_QUERY = `INSERT INTO Employee (Employee_Name,Employee_Id,Account_No,IFSC_Code,Account_Name,Bank_Name ) VALUES('${Employee_Name}','${Employee_Id}','${Accoubt_No}','${IFSC_Code}','${Account_Name},'${Bank_Name}')`;
    connection.query(INSERT_Employee_QUERY, (err,results) => {
        if(err){
            return res.send(err)
        }
        else {
            return res.send('successfully added product')
        }
    });
});

app.get('/Salary/:Employee_Id',(req,res)=>{
    connection.query(`SELECT * FROM Salary WHERE Employee_Id = ?`,[req.params.Employee_Id],(err,results) => {
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

app.get('/Employee/:Employee_Id', (req, res) => {
    connection.query(`SELECT * FROM Employee WHERE Employee_Id = ?`,[req.params.Employee_Id],(err,results) => {
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

app.delete('/Employee/:Employee_Id',(req, res) => {
    connection.query(`DELETE From Employee WHERE Employee_Id =?`,[req.params.Employee_Id],(err, rows, fields) => {
       if(!err){
            return res.send('Deleted successfully.');
       }
       else {
        console.log(err);
        }
    });
});

app.post('/Employee',(req,res) => {
    connection.query(`SELECT * FROM Employee`,(err, results)=>{ 
        if(!err)
             res.json({
                 data: results
             });
        else
             console.log(err);
    })
});

app.listen(4001, () => {
    console.log(' Products server listening on port 4001')
});

