const express = require('express')

var mongoose = require('mongoose');
var cors =require('cors');
var bodyParser = require('body-parser');
var login=require('./backend/models/logindata');


// ************************ DB Connection ************************

var dbOptions = {useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, auto_reconnect: true};

mongoose.connect("mongodb+srv://Meghana_07:vnrvjiet@cluster0-lahh1.mongodb.net/NCRP?retryWrites=true&w=majority", dbOptions);

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
app.use(cors());
// ****** Body Parser ********





// *********************** Backend Routes **********************

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/api/login',(req,res)=>{
    //console.log('gggggggggggError while getting login credentials from DB ');

    login.find({},null,{limit:1},(err,docs)=>
    {
        if(err)
        {
        res.json({error:err});
        console.log('Error while getting login credentials from DB ');
        }
        else
        res.json(docs);
    })
})


app.get("/login", (req,res)=>{
    login.find({Emp_id:req.body.Emp_id,Pwd:req.body.Pwd},null, (err,docs)=>
    {
        if(err)
        {
        res.send("User not found.")
        }
        res.send("Logged in succesfully.")
    }
)});













// *********************** Backend Routes **********************









// ******************** Express Server *************************

const port = 3000

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

