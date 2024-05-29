const clientConnectPromise = require("./index");
let client;
let db;
let results;
async function init() {
  if (db) return;
  try {
    client = await clientConnectPromise;
    db = await client.db(process.env.DBName);
    results = await db.collection('results');
  } catch (error) {
    throw new Error('Failed to establish connection to db');
  }
};
async function getResultsCollection() {
  if (!results) await init();
  return results;
};
module.exports = { init, getResultsCollection };