/**
 * bootstrap.js
 * 
 * This file pulls in the root/basic dependencies needed for the application. 
 * While you are free to add/edit/remove from thsi file, you shouldn't need to. 
 * This is all standard stuff that helps load your application and gets the app.js
 * file ready to go for you to start your coding magic.
 */

 // Load our helpers. This must be first because the helpers file first loads the 
 // dotenv and gives you access to your environmental variables. 
require(__dirname + '/helpers/helpers')

// Load the Express App
const express = require('express');
global.app = express();

// Set the View Engine as Pug
app.set('view engine', 'pug');

// Pull in all of our routes
const routes = require('require-all')(__dirname + '/routes')

