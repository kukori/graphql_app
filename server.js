const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');

const server = express();

server.use('/graphql', graphqlHTTP({
    schema: schema
}));

server.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});