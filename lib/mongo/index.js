// Import the MongoClient class from the 'mongodb' package
import { MongoClient } from 'mongodb';

// Load environment variables from the .env file
import dotenv from 'dotenv';
dotenv.config();

// Get the MongoDB connection URI from the environment variables
const uri = process.env.mongoSurveyDB;

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
if (process.env.NODE_ENV === 'production') {
  if (!global._mongoClientPromise) {
    global._mongoClientPromise = client.connect();
  }
  clientConnectPromise = global._mongoClientPromise;
} else {
  clientConnectPromise = client.connect();
}

// Export the promise representing the connection to the MongoDB database
export default clientConnectPromise;