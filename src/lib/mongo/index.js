const { MongoClient } = require('mongodb');
const dotenv = require( 'dotenv');
dotenv.config();
const {mongoSurveyDB} = process.env;
const uri = mongoSurveyDB;
const options = {};
if (!uri) throw new Error('Add uri!');
let client = new MongoClient(uri, options);
let clientConnectPromise;
if (process.env.NODE_ENV !== 'production') {
  if (!global._mongoClientPromise) {
    global._mongoClientPromise = client.connect();
    console.log("connected to mongo?")
  }
  clientConnectPromise = global._mongoClientPromise;
} else {
  clientConnectPromise = client.connect();
};
module.exports = clientConnectPromise;