const express = require('express');

const server = express();

server.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});