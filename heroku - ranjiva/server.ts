const express = require('express');

var fs = require("fs");
var https=require("https");
const cookieParser = require('cookie-parser');
const _ = require ("lodash");
const path = require("path");


const checkIfAuthenticated=require("./server/middleware/auth.middleware");
const retrieveUserIdFromRequest=require("./server/middleware/get-user.middleware");

const getUser=require("./server/user/get-user.route");
const getUsers=require("./server/user/get-users.route");
const getAllUsers=require("./server/user/get-all-users.route");
const createUser=require("./server/user/create-user.route");
const logout=require("./server/user/logout.route");
const login=require("./server/user/login.route");

const ping=require("./server/ping/ping.route");

const createTransactionSerialization=require("./server/transaction/create-transaction-serialization.route");
const createTransaction=require("./server/transaction/create-transaction.route");
const getTransactions=require("./server/transaction/get-transactions.route");

const getPhotographers=require("./server/photographer/get-photographers.route");
const createPhotographer=require("./server/photographer/create-photographer.route");
const getPhotographer=require("./server/photographer/get-photographer.route");
const editPhotographer=require("./server/photographer/edit-photographer.route");
const deletePhotographer=require("./server/photographer/delete-photographer.route");

const getPhotographs=require("./server/photograph/get-photographs.route");
const getPhotograph=require("./server/photograph/get-photograph.route");
const buyPhotograph=require("./server/photograph/buy-photograph.route");
const sellPhotograph=require("./server/photograph/sell-photograph.route");
const getMyPhotographs=require("./server/photograph/my-photographs.route");
const deletePhotograph=require("./server/photograph/delete-photograph.route");
const createPhotograph=require("./server/photograph/create-photograph.route");
const editPhotograph=require("./server/photograph/edit-photograph.route");

const getMessages=require("./server/message/get-messages.route");
const addMessagePost=require("./server/message/create-message.route");
const addMessageGet=require("./server/message/create-message-get.route");

/* DODANO ZA OSTVARENJE CSRF POST NAPADA */
var multer = require('multer');
var upload = multer();
/* *********************************** */

var bodyParser = require('body-parser');

const app = express();

app.use(cookieParser());
app.use(retrieveUserIdFromRequest);
app.use(bodyParser.json());

/*DIRECTORY LISTING*/
var serveIndex = require('serve-index');
app.use(express.static(__dirname + "/"))
app.use('/dir', serveIndex(__dirname + '/'))
///////////////////////////////////////////

app.use(express.static('./dist/angular'));

app.route("/api/user").get(getUser);
app.route("/api/users-all").get(getAllUsers); 

app.route("/api/sendmoney/receiver=:receiver&amount=:amount").get(checkIfAuthenticated,createTransaction); 
app.route("/api/transactions/:email").get(getTransactions);

app.route("/api/messages/SESSIONID/:session").get(checkIfAuthenticated,getMessages); //sessionID u URL

app.route("/api/photographers/:id").get(getPhotographer);
app.route("/api/photographers").get(getPhotographers);  

app.route("/api/photographs").get(getPhotographs); 
app.route("/api/photographs/:id").get(getPhotograph); 
app.route("/api/myphotographs/SESSIONID/:session").get(checkIfAuthenticated,getMyPhotographs); //sessionID u URL

app.route("/api/ping").get(ping);

app.get('/*', (req, res) => {
    let url = path.join(__dirname, '/dist/angular/index.html');
    res.sendFile(url);
  });


/* DODANO ZA OSTVARENJE CSRF POST NAPADA */
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(upload.array()); 
app.use(express.static('public'));
/* **************************************** */

var commandLineArgs = require('command-line-args');

const optionDefinitions = [
    { name: 'secure', type: Boolean,  defaultOption: true },
];

const options = commandLineArgs(optionDefinitions);

// REST API

app.route("/api/addtransactionserial").post(checkIfAuthenticated,createTransactionSerialization); 


app.route("/api/addmessage/receiver=:receiver&content=:content").get(checkIfAuthenticated,addMessageGet);
app.route("/api/addmessage").post(checkIfAuthenticated,addMessagePost); 


app.route("/api/addphotographer").post(createPhotographer);
app.route("/api/photographers/:id").put(editPhotographer);
app.route("/api/photographers/:id").delete(deletePhotographer);

app.route("/api/addphotograph").post(createPhotograph); 
app.route("/api/buyphotograph/:id").post(checkIfAuthenticated,buyPhotograph); 
app.route("/api/sellphotograph/:id").post(checkIfAuthenticated,sellPhotograph); 
app.route("/api/photographs/:id").put(editPhotograph); 
app.route("/api/photographs/:id").delete(deletePhotograph); 


app.route("/api/signup").post(createUser); 
app.route("/api/users").post(getUsers);
app.route("/api/logout").post(checkIfAuthenticated,logout); 
app.route("/api/login").post(login);


app.listen(process.env.PORT || 9000);



