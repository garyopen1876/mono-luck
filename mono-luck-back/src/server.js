require('dotenv').config();
const express = require('express');
const cors = require('cors');
const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors());
server.use(express.static(__dirname + '/public'));

const router = express.Router();
require('./routes/index.routes')(router);

server.use('/', router);

const PORT = process.env.PORT;
server.listen(PORT, (err) => {
    if(err) {
        console.log(err);
        return;
    }
    console.log(`Server is running on port ${PORT}.`);
});

