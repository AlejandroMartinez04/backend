const express = require ('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const app = express ();
const bodyParser = require('body-parser');
const { mongoose } = require('./database');
const userRoutes = require("./routes/user");
const casesRoutes = require("./routes/cases");
const personRoutes = require("./routes/person");
const employeeRoutes = require("./routes/employee");


app.use(cors(
    {
        origin: 'https://sadimi-suj6.onrender.com'    
    }
)); // Permite todas las conexiones

//Settings
app.set('port', process.env.PORT || 3000);


//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(bodyParser.json()); 
app.use('/api', userRoutes);
app.use('/api', casesRoutes);
app.use('/api', personRoutes);
app.use('/api', employeeRoutes);


//Routes
app.use('/tasks',require('./routes/user'));
app.use('/tasks',require('./routes/cases'));
app.use('/tasks',require('./routes/person'));
app.use('/tasks',require('./routes/employee'));


app.get("/", (req,res) => {
    res.send("Welcome to sadimi");
});



//Static files
app.use(express.static(path.join(__dirname, 'public')))

//Starting server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});