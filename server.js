const express = require('express')

var mongoose = require('mongoose');

var bodyParser = require('body-parser');



// ************************ DB Connection ************************

var dbOptions = {useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, auto_reconnect: true};

mongoose.connect("mongodb+srv://Meghana_07:vnrvjiet@cluster0-lahh1.mongodb.net/WTProject?retryWrites=true&w=majority", dbOptions);

mongoose.connection.on('connected', function(){

    console.log("Connected to DB");

})

mongoose.connection.on('error', function(err){

    console.log("Error while connecting to DB: " + err);

})

// ************************ DB Connection ************************







const app = express()







// ****** Body Parser *******

// parse application/x-www-form-urlencoded

app.use(bodyParser.urlencoded({ extended: false })) 

// parse application/json

app.use(bodyParser.json())

// ****** Body Parser ********





// *********************** Backend Routes **********************

app.get('/', (req, res) => res.send('Hello World!'))













// *********************** Backend Routes **********************









// ******************** Express Server *************************

const port = 3000

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

