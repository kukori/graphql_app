const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
dotenv.config({ path: './config/config.env' });

const app = express();

// Connect to database
connectDB();

// Allow cros origin requests
app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema: schema,
    // graphiql: true
}));

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}

app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});