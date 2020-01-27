const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const cors = require('cors');

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');

const config = require('./config');

const db = require('knex')(config.DATABASE_CONFIG);


const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => res.send('it is working!'));

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

app.listen(config.PORT, ()=> {
    console.log(`Server is up on port ${config.PORT}`);
});