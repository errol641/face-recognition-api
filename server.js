const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const cors = require('cors');

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');

const db = require('knex')({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'errol911E',
      database : 'facerecognition'
    }
});


const app = express();

app.use(bodyParser.json());
app.use(cors());

app.poist('/', (req, res) => res.send('it is working!'));

app.post('/signin', (req, res) => {
    signin.handleSignin(req, res, db, bcrypt);
})

app.post('/register', (req, res) => {
    register.handleRegister(req, res, db, bcrypt);
})

app.get('/profile/:id', (req, res) => {
    profile.handleGetProfile(req, res, db);
})

app.put('/image', (req, res) => {
    image.handleImageSubmit(req, res, db);
})

app.post('/imageurl', (req, res) => {
    image.handleApiCall(req, res);
})

app.listen(process.env.PORT || 3000, ()=> {
    console.log(`Server is up on port ${process.env.PORT}`);
});