const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
dotenv.config({ path: './config/config.env' });

const server = express();

// Connect to database
connectDB();

server.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));

server.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});