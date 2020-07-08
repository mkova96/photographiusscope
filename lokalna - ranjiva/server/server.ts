import {Application,Request, Response, NextFunction} from "express";

var fs = require("fs");
var https=require("https");
const cookieParser = require('cookie-parser');
const _ = require ("lodash");
const path = require("path");


const checkIfAuthenticated=require("./middleware/auth.middleware");
const retrieveUserIdFromRequest=require("./middleware/get-user.middleware");

const getUser=require("./user/get-user.route");
const getUsers=require("./user/get-users.route");
const getAllUsers=require("./user/get-all-users.route");
const createUser=require("./user/create-user.route");
const logout=require("./user/logout.route");
const login=require("./user/login.route");

const ping=require("./ping/ping.route");

const createTransactionSerialization=require("./transaction/create-transaction-serialization.route");
const createTransaction=require("./transaction/create-transaction.route");
const getTransactions=require("./transaction/get-transactions.route");

const getPhotographers=require("./photographer/get-photographers.route");
const createPhotographer=require("./photographer/create-photographer.route");
const getPhotographer=require("./photographer/get-photographer.route");
const editPhotographer=require("./photographer/edit-photographer.route");
const deletePhotographer=require("./photographer/delete-photographer.route");

const getPhotographs=require("./photograph/get-photographs.route");
const getPhotograph=require("./photograph/get-photograph.route");
const buyPhotograph=require("./photograph/buy-photograph.route");
const sellPhotograph=require("./photograph/sell-photograph.route");
const getMyPhotographs=require("./photograph/my-photographs.route");
const deletePhotograph=require("./photograph/delete-photograph.route");
const createPhotograph=require("./photograph/create-photograph.route");
const editPhotograph=require("./photograph/edit-photograph.route");

const getMessages=require("./message/get-messages.route");
const addMessagePost=require("./message/create-message.route");
const addMessageGet=require("./message/create-message-get.route");

/* DODANO ZA OSTVARENJE CSRF POST NAPADA */
var multer = require('multer');
var upload = multer();
/* *********************************** */


var express = require("express");
var bodyParser = require('body-parser');

const app: Application = express();

app.use(cookieParser());
app.use(retrieveUserIdFromRequest);
app.use(bodyParser.json());

/*DIRECTORY LISTING*/
var serveIndex = require('serve-index');
app.use(express.static(__dirname + "/"))
app.use('/dir', serveIndex(__dirname + '/'))
///////////////////////////////////////////

app.use("/", express.static(path.join(__dirname, "angular")));


/* DODANO ZA OSTVARENJE CSRF POST NAPADA */
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(upload.array()); 
app.use(express.static('public'));
/* **************************************** */


// REST API

app.route("/api/addtransactionserial").post(checkIfAuthenticated,createTransactionSerialization); 
app.route("/api/sendmoney/receiver=:receiver&amount=:amount").get(checkIfAuthenticated,createTransaction);
app.route("/api/transactions/:email").get(getTransactions);

app.route("/api/messages/SESSIONID/:session").get(checkIfAuthenticated,getMessages);
app.route("/api/addmessage/receiver=:receiver&content=:content").get(addMessageGet);
app.route("/api/addmessage").post(checkIfAuthenticated,addMessagePost);


app.route("/api/photographers").get(getPhotographers);
app.route("/api/addphotographer").post(createPhotographer);
app.route("/api/photographers/:id").get(getPhotographer);
app.route("/api/photographers/:id").put(editPhotographer);
app.route("/api/photographers/:id").delete(deletePhotographer);

app.route("/api/photographs").get(getPhotographs);
app.route("/api/photographs/:id").get(getPhotograph);
app.route("/api/myphotographs/SESSIONID/:session").get(checkIfAuthenticated,getMyPhotographs);
app.route("/api/addphotograph").post(createPhotograph);
app.route("/api/buyphotograph/:id").post(checkIfAuthenticated,buyPhotograph);
app.route("/api/sellphotograph/:id").post(checkIfAuthenticated,sellPhotograph);
app.route("/api/photographs/:id").put(editPhotograph);
app.route("/api/photographs/:id").delete(deletePhotograph);


app.route("/api/signup").post(createUser);
app.route("/api/user").get(getUser);
app.route("/api/users").post(getUsers);
app.route("/api/users-all").get(getAllUsers);
app.route("/api/logout").post(checkIfAuthenticated,logout);
app.route("/api/login").post(login);


app.route("/api/ping").get(ping);

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "angular", "index.html"));
});


// launch an HTTP Server
const httpServer = app.listen(9000, () => {
    console.log("HTTP Server running at http://localhost:" + "9000");
});


