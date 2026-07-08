const express = require('express');
const cors = require('cors');

const app = express();

const contactRouter = require('./app/routes/contact.route');
app.use('/api/contacts', contactRouter);

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to contact book application.' });
});

module.exports = app;