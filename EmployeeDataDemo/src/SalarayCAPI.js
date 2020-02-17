const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

const SELECT_ALL_salaryStructure_QUERY = 'SELECT * FROM salaryStructure';

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

app.get('/salaryStructure', (req, res) => {
res.send('go to /Login to see ')
});

app.get('/salaryStructure/add', (req, res) => {
    const {row_id, from_salary, to_salary, tax_in_percent, sur_plus_in_percent, start_year, end_year} = req.query;
    const INSERT_salaryStructure_QUERY = `INSERT INTO salaryStructure (row_id,from_salary,to_salary,tax_in_percent,sur_plus_in_percent,start_year,end_year) VALUES('${row_id}','${from_salary}','${to_salary}','${tax_in_percent}','${sur_plus_in_percent}','${start_year}','${end_year}')`;
    connection.query(INSERT_salaryStructure_QUERY,(err,results) => {
        if(err){
            return res.send(err)
        }
        else{
            return res.send('successfully added product')
        }
        console.log(results);
    });
});

app.get('/salaryStructure', (req, res) => {
connection.query(SELECT_ALL_salaryStructure_QUERY, (err, results) => {
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
app.listen(4004, () => {
    console.log(' Products server listening on port 4004')
});
