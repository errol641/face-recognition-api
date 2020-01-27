// PostgreSQL Databse config & server port
module.exports = {
    DATABASE_CONFIG: {
        client: 'pg',
        connection: {
          host : '127.0.0.1',
          user : 'DATABASE_LOGIN',
          password : 'DATABASE_PASSWORD',
          database : 'DATABASE_NAME'
        }
    },
    PORT: 3001
};