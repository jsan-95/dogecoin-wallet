const path = require('path');
const express = require('express');
const morgan = require('morgan');


const app = express();

// Db connection
const { mongoose } = require('./database');

// Settings 
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/transactions', require('./routes/transaction.routes'));
app.use('/api/app', require('./routes/app.routes'));

// Static Files
app.use(express.static(path.join(__dirname, "../dist")));

// Starting the server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});

