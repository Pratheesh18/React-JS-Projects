const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = requyire('body-parser');
require('dotenv').config();
const cors = require('cors');

const app = express();
const secretKey = process.env.JWT_SECRET_KEY;

app.use(bodyParser.json())
app.use(cors());


app.post('/signin' , (req,res) => {
    const token = jwt.sign({username : req.body.username} , secretKey);
    res.json();
});


app.get('/protected' , (req,res) => {
    const token = req.headers.authorization.split('')[1];
    jwt.verify(token,secretKey,(err,decoded) => {
        if(err){
            return res.status(401).json({message : 'Inavlid Token'});
        }
        res.json({message : 'Protected Content'})
    });
});


app.listen(4000,() => {
    console.log('Server is running on port 4000');
})