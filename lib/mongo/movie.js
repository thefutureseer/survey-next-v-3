// Import the promise representing the connection to the MongoDB database
import clientConnectPromise from "./index";

let client;
let db;
let movies;

//Initialize the database connection
export async function init() {
  // If the database is already initialized, return
  if (db) return;
  try {
    client = await clientConnectPromise;
    db = await client.db();
    movies = await db.collection('movies');
    console.log("movies: ", movies);

  } catch (error) {
    // Throw an error if failed to connect to the database
    throw new Error('Failed to establish connection to db');
  }
}

// Immediately invoked function expression (IIFE) to initialize the database
(async () => {
  await init();
})();

// Function to retrieve movies from the database
export async function getMovies() {
  try {
    if(!movies) await init();
    // Retrieve movies from the 'movies' collection
    const result = await movies
     .find({})
     .limit(20)
     .map(user=>({...user, _id: user._id.toString() }))
     .toArray();
    // Return the list of movies
    return { movies: result };
  } catch (error) {
    // Return an empty array if an error occurs
    return { error: 'Fail to fetch movies!' };
  }
}