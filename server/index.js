const express = require('express')
const app = express()
const mysql = require('mysql2')
const cors = require('cors')

app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'password',
    database:'customerList'
})

//if you get authentication problem
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_password BY 'password';

app.get('/customers', (req, res) => {
    const q = 'SELECT * FROM CUSTOMERS'
    db.query(q, (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.listen(5174, () => {
    console.log('listening to port 5174')
})