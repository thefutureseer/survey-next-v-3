// Import the MongoClient class from the 'mongodb' package
const { MongoClient } = require('mongodb');

// Load environment variables from the .env file
const dotenv = require( 'dotenv');
dotenv.config();

// Access environment variables
const {mongoSurveyDB} = process.env;
console.log(" HERES THE MONGOSURVEY URI: ", mongoSurveyDB);

// Get the MongoDB connection URI from the environment variables
const uri = mongoSurveyDB;

// Set up options object
const options = {};

// Throw an error if the MongoDB connection URI is not provided
if (!uri) throw new Error('Add uri!');

// Instantiate a new MongoClient with the URI and options object
let client = new MongoClient(uri, options);

// Declare a promise to connect to the MongoDB database
let clientConnectPromise;

// Only attempt to connect to the database if not already connected
// This prevents exhausting the connection pool
if (process.env.NODE_ENV !== 'production') {
  if (!global._mongoClientPromise) {
    global._mongoClientPromise = client.connect();
    console.log("connected to mongo?")
  }
  clientConnectPromise = global._mongoClientPromise;
} else {
  clientConnectPromise = client.connect();
}

// Export the promise representing the connection to the MongoDB database
module.exports = clientConnectPromise;