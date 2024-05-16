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
};

//post new results to the database
export async function addResults(newResults){
  try {
    //get the db collection
    const resultsCollection = await getResultsCollection();
    //insert new results to the collection
    const result = await resultsCollection.insertOne(newResults);

    return {success: true, result};
    
  }//handle errors 
  catch(error){
    return { error: 'Failed to add result!' };
  }
}
