import {Application,Request, Response, NextFunction} from "express";

var fs = require("fs");
var https=require("https");
const cookieParser = require('cookie-parser');
const _ = require ("lodash");
const path = require("path");
const helmet = require ('helmet');
const { body } = require('express-validator');
const noCache = require('nocache')

const checkIfAuthenticated=require("./middleware/auth.middleware");
const retrieveUserIdFromRequest=require("./middleware/get-user.middleware");
const checkCsrfToken = require("./middleware/csrf.middleware");
const xssiProtection = require ("./middleware/xssi.middleware");
const checkIfAuthorized = require ("./middleware/autorization.middleware");

const getUser=require("./user/get-user.route");
const getUsers=require("./user/get-users.route");
const getAllUsers=require("./user/get-all-users.route");
const createUser=require("./user/create-user.route");
const logout=require("./user/logout.route");
const login=require("./user/login.route");

const ping=require("./ping/ping.route");
const validateCaptcha=require("./captcha/validate-captcha");

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

var express = require("express");
var bodyParser = require('body-parser');

const app: Application = express();

/*
// If an incoming request uses
// a protocol other than HTTPS,
// redirect that request to the
// same url but with HTTPS
const forceSSL = function() {
    return function (req, res, next) {
      if (req.headers['x-forwarded-proto'] !== 'https') {
        return res.redirect(
         ['https://', req.get('Host'), req.url].join('')
        );
      }
      next();
    }
  }
// Instruct the app
// to use the forceSSL
// middleware
app.use(forceSSL());
*/
app.use(helmet()); 
app.use(noCache())
app.use(helmet.referrerPolicy({ policy: 'no-referrer' }))


app.use(
    helmet.hsts ({
        includeSubDomains : true, 
        maxAge : 31536000,
        preload : true
    })
);

app.use(helmet.featurePolicy({
    features: {
      fullscreen: ["'self'"],
      payment: ["'none'"],
      syncXhr: ["'none'"]
    }
  }))

app.use(helmet.contentSecurityPolicy({
    directives: {
      styleSrc: ["'self'","'unsafe-inline'",'https://fonts.googleapis.com','https://angular-academy.s3.amazonaws.com','https://maxcdn.bootstrapcdn.com','https://cdnjs.cloudflare.com'],
      frameAncestors: ["'self'",'https://www.google.com'], //recaptcha, RADI I BEZ OVOGA
      frameSrc: ["'self'",'https://www.google.com'], //recaptcha
      baseUri:["'self'"], //RADI I BEZ OVOGA
      formAction:["'self'"], //RADI I BEZ OVOG
      scriptSrc:["'self'",'https://www.google.com','https://www.gstatic.com','https://code.jquery.com','https://cdnjs.cloudflare.com','https://maxcdn.bootstrapcdn.com'],
      imgSrc:["'self'",'blob: data:'],
      fontSrc:["'self'",'https://fonts.gstatic.com','https://cdnjs.cloudflare.com'],
      connectSrc:["'self'"],
      defaultSrc:["'self'"] //RADI I BEZ OVOGA
    }
  }))

app.use(cookieParser());
app.use(retrieveUserIdFromRequest);
app.use(bodyParser.json());

app.use("/", express.static(path.join(__dirname, "angular")));

app.route("/api/user").get(getUser,xssiProtection());
app.route("/api/users-all").get(checkIfAuthenticated,getAllUsers,xssiProtection()); 

app.route("/api/transactions").get(checkIfAuthenticated,getTransactions,xssiProtection());

app.route("/api/messages").get(checkIfAuthenticated,_.partial(checkIfAuthorized,'USER'),getMessages,xssiProtection());

app.route("/api/photographers/:id").get(checkIfAuthenticated,getPhotographer,xssiProtection());
app.route("/api/photographers").get(checkIfAuthenticated,_.partial(checkIfAuthorized,'ADMIN'),getPhotographers,xssiProtection());  

app.route("/api/photographs").get(checkIfAuthenticated,getPhotographs,xssiProtection()); 
app.route("/api/photographs/:id").get(checkIfAuthenticated,getPhotograph,xssiProtection()); 
app.route("/api/myphotographs").get(checkIfAuthenticated,_.partial(checkIfAuthorized,'USER'),getMyPhotographs,xssiProtection()); 

app.route("/api/ping").post(checkIfAuthenticated,_.partial(checkIfAuthorized,'USER'),
  [body('input')
    .trim()
    .escape()
  ], 
ping,xssiProtection());

app.route("/api/validatecaptcha").post(validateCaptcha,xssiProtection());


/*app.get('/*', (req, res) => {
    let url = path.join(__dirname, '/dist/angular/index.html');
    res.set('Cache-Control', 'no-store');
    res.sendFile(url);
});*/

// REST API

app.route("/api/sendmoney").post(checkIfAuthenticated,checkCsrfToken,_.partial(checkIfAuthorized,'USER'),
  [body('receiverEmail')
    .trim()
    .escape()
  ],  
createTransaction,xssiProtection()); 

app.route("/api/addmessage").post(checkIfAuthenticated,checkCsrfToken,_.partial(checkIfAuthorized,'USER'),
  [body('receiverEmail')
    .trim()
    .escape(),
  body('content')
    .trim()
    .escape()
  ],
addMessagePost,xssiProtection()); 


app.route("/api/addphotographer").post(checkIfAuthenticated,checkCsrfToken,_.partial(checkIfAuthorized,'ADMIN'),
  [body('firstName')
    .trim()
    .escape(),
  body('lastName')
    .trim()
    .escape()
  ],  
createPhotographer,xssiProtection());
app.route("/api/photographers/:id").put(checkIfAuthenticated,checkCsrfToken,_.partial(checkIfAuthorized,'ADMIN'),
  [body('firstName')
    .trim()
    .escape(),
  body('lastName')
    .trim()
    .escape()
  ],  
editPhotographer,xssiProtection());
app.route("/api/photographers/:id").delete(checkIfAuthenticated,checkCsrfToken,_.partial(checkIfAuthorized,'ADMIN'),deletePhotographer,xssiProtection());

app.route("/api/addphotograph").post(checkIfAuthenticated,checkCsrfToken,_.partial(checkIfAuthorized,'ADMIN'),
  [body('name')
    .trim()
    .escape()
  ],
createPhotograph,xssiProtection()); 
app.route("/api/buyphotograph/:id").post(checkIfAuthenticated,checkCsrfToken,_.partial(checkIfAuthorized,'USER'),buyPhotograph,xssiProtection()); 
app.route("/api/sellphotograph/:id").post(checkIfAuthenticated,checkCsrfToken,_.partial(checkIfAuthorized,'USER'),sellPhotograph,xssiProtection()); 
app.route("/api/photographs/:id").put(checkIfAuthenticated,checkCsrfToken,_.partial(checkIfAuthorized,'ADMIN'),
  [body('name')
    .trim()
    .escape()
  ],
editPhotograph,xssiProtection()); 
app.route("/api/photographs/:id").delete(checkIfAuthenticated,checkCsrfToken,_.partial(checkIfAuthorized,'ADMIN'),deletePhotograph,xssiProtection()); 


app.route("/api/signup").post(
  [body('firstName')
    .trim()
    .escape(),
  body('lastName')
    .trim()
    .escape(),
  body('email')
    .trim()
    .escape()
  ],  
createUser,xssiProtection()); 

app.route("/api/users").post(checkIfAuthenticated,checkCsrfToken,getUsers,xssiProtection());

app.route("/api/logout").post(checkIfAuthenticated,checkCsrfToken,logout,xssiProtection()); 
app.route("/api/login").post(
  [body('email')
    .trim()
    .escape()
  ], 
login,xssiProtection()); 

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "angular", "index.html"));
});



(async () => {

  const httpsServer = await https.createServer({
      key: fs.readFileSync('key.pem'),
      cert: fs.readFileSync('cert.pem')
  }, app);
  httpsServer.listen(9000, () => console.log("HTTPS Secure Server running at https://localhost:" + "9000"));

})();


