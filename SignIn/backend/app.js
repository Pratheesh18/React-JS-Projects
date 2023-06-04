const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
require('dotenv').config();
const cors = require('cors');

const app = express();
const secretKey = process.env.JWT_SECRET_KEY;

app.use(bodyParser.json())
app.use(cors());


app.post('/signin' , (req,res) => {
    const {username , password} = req.body;

    if(username === 'pratheesh' && password === '1234'){
        const token = jwt.sign({username} , secretKey);
        res.json({token});
    }else{
        res.status(401)/json({message : 'Inavlid username  or password'});

    }
});


app.get('/protected', verifyToken, (req, res) => {
  // This route is protected and can only be accessed with a valid token
  res.json({ message: 'Protected content' });
});

function verifyToken(req, res, next) {
    const token = req.headers.authorization;
  
    if (!token) {
      return res.status(401).json({ message: 'Missing token' });
    }
  
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        return res.status(403).json({ message: 'Invalid token' });
      }
  
      req.user = decoded;
      next();
    });
  }


app.listen(4000,() => {
    console.log('Server is running on port 4000');
})