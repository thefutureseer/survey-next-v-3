// Import the promise representing the connection to the MongoDB database
const clientConnectPromise = require("./index");

let client;
let db;
let results;

//Initialize the database connection
async function init() {
  // If the database is already initialized, return
  if (db) return;
  try {
    client = await clientConnectPromise;
    db = await client.db(process.env.DBName);
    results = await db.collection('results');
    console.log("results: ", results);

  } catch (error) {
    // Throw an error if failed to connect to the database
    throw new Error('Failed to establish connection to db');
  }
}

// Function to get the results collection
async function getResultsCollection() {
  if (!results) await init();
  return results;
}

module.exports = { init, getResultsCollection };