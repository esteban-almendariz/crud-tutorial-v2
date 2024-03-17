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

app.post('/create', (req, res) => {
    const q = `INSERT INTO customers (companyName, phoneNumber, address, website) VALUES (?)`;
    const values = [
        req.body.companyName,
        req.body.phoneNumber,
        req.body.address,
        req.body.website
    ]
    db.query(q, [values], (err, data) => {
        if(err) return res.json(err)
        return res.json('Customer has been added')
    })
})

app.put('/customers/:id', (req, res) => {
    const customerId = req.params.id;
    const q = `UPDATE customers SET companyName = ?, phoneNumber = ?, address = ?, website = ? WHERE id= ?`

    const values = [
        req.body.companyName,
        req.body.phoneNumber,
        req.body.address,
        req.body.website
    ]

    db.query(q, [...values, customerId], (err, data) => {
        if(err) return res.json(err)
        return res.json('Customer has been Updated')
    })
})

app.delete('/customers/:id', (req, res) => {
    const customerId = req.params.id;
    const q = 'DELETE FROM customers WHERE id= ?'

    db.query(q, [customerId], (err, data) => {
        if(err) return res.json(err)
        return res.json('Customer has been Deleted')
    })
})

app.listen(5174, () => {
    console.log('listening to port 5174')
})