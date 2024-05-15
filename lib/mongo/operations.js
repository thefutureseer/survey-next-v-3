import { getResultsCollection } from '@lib/mongo/results';

// Function to retrieve results from the database
export async function getresults() {
  try{
    const resultsCollection = await getResultsCollection();

    // Retrieve results from the 'results' collection
    const result = await resultsCollection
    .find({})
    .limit(20)
    .map(user => ({ ...user, _id: user._id.toString() }))
    .toArray();
  // Return the list of results
  return { results: result };

  } catch (e) {
    return{ e: "Failed to fetch results"}
  }
}

// Function to retrieve results from the database
// export default async function getresults(results) {
//   try {
//     if(!results) await init();
//     // Retrieve results from the 'results' collection
//     const result = await results
//      .find({})
//      .limit(20)
//      .map(user=>({...user, _id: user._id.toString() }))
//      .toArray();
//     // Return the list of results
//     return { results: result };
//   } catch (error) {
//     // Return an empty array if an error occurs
//     return { error: 'Fail to fetch results!' };
//   }
// };