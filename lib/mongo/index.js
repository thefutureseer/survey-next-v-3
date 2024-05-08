import {MongoClient} from 'mongodb'


// Load environment variables from .env file
import dotenv from 'dotenv';
dotenv.config();

//Get uri 
const uri = process.env.mongoSurveyDB;

//set up options object
const options = {};

if (!uri) throw new Error('Add uri!')

//instantiate new mongo client with uri and options object
let client = new MongoClient(uri, options);
let clientPromise;

//Not query connection unless there is no connection
//so we dont exhaust our connection pool 
if (process.env.NODE_ENV === 'production') {
  if(!global._mongoClientPromise) {
    global._mongoClientPromise = client.connect();
  } clientPromise = global._mongoClientPromise;
} else {
  clientPromise = client.connect();
}

export default clientPromise;