# Face Recognition Backend Server

Front-end app: https://github.com/errol641/face-recognition-app

## PREREQUISITES

This server uses [knex.js](https://www.npmjs.com/package/knex) to query the postgreSQL database.
If you want to use a different database:

1. Uninstall pg package with `npm uninstall pg`
2. Read the documentation here about using other databases: http://knexjs.org/#Installation-node

## CONFIGURATION 

If you are using postgreSQL:

1. Open `config.js` and fill out your database login information 

2. The server runs on port 3001 by default. You can change the port in `config.js`

## HOW TO START

1. Finish above steps
2. ### `npm start`
