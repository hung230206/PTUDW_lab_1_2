const express = require('express');
const cors = require('cors');

const app = express();
const ApiError = require('./app/api-error');
const contactRouter = require('./app/routes/contact.route');

// handle 404 response
app.use((req, res, next) => {
    return next(new ApiError(404, "Resource not found"));
});

app.use((err, req, res, next) => {
    return res.status(err.statusCode || 500).json({
        message: err.message || "Internal Server Error"
    });
});


app.use('/api/contacts', contactRouter);

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to contact book application.' });
});

module.exports = app;