// // Import necessary modules
// import { MongoClient } from 'mongodb';
// import { NextApiRequest, NextApiResponse } from 'next';

// // Define your API route handler
// export default async function handler(NextApiRequest, NextApiResponse) {
//   if (req.method === 'POST') {
//     try {
//       // Connect to MongoDB
//       const client = new MongoClient(process.env.mongoSurveyDB);
//       await client.connect();
//       const database = client.db(process.env.DBName);
//       const collection = database.collection(process.env.collectionName);

//       // Process incoming survey data and save it to MongoDB
//       // Replace this with your actual logic
//       // For example:
//       await collection.insertOne(req.body);
//       console.log("HERES REQ.BODY: ", req.body);

//       // Send a success response
//       res.status(200).json({ message: 'Survey data saved successfully' });
//     } catch (error) {
//       // Handle errors
//       console.error('Error saving survey data:', error);
//       res.status(500).json({ error: 'Internal server error' });
//     } finally {
//       // Close the MongoDB client connection
//       await client.close();
//     }
//   } else {
//     // Return a method not allowed error for non-POST requests
//     res.status(405).json({ error: 'Method not allowed' });
//   }
// };