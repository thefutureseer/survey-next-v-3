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
    db = await client.db('survey_results');
    results = await db.collection('results');
    console.log("results: ", results);

  } catch (error) {
    // Throw an error if failed to connect to the database
    throw new Error('Failed to establish connection to db');
  }
}

// Immediately invoked function expression (IIFE) to initialize the database
(async () => {
  await init();
})();

// Function to retrieve results from the database
async function getresults() {
  try {
    if(!results) await init();
    // Retrieve results from the 'results' collection
    const result = await results
     .find({})
     .limit(20)
     .map(user=>({...user, _id: user._id.toString() }))
     .toArray();
    // Return the list of results
    return { results: result };
  } catch (error) {
    // Return an empty array if an error occurs
    return { error: 'Fail to fetch results!' };
  }
};

module.exports = {init, getresults};