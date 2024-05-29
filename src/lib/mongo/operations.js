import { getResultsCollection } from '@/lib/mongo/results';
export async function getresults() {
  try{
    const resultsCollection = await getResultsCollection();
    const result = await resultsCollection
    .find({})
    .limit(20)
    .map(user => ({ ...user, _id: user._id.toString() }))
    .toArray();
  return { results: result };
  } catch (e) {
    return{ e: "Failed to fetch results"}
  }
};
export async function addResults(newResults){
  try {
    const resultsCollection = await getResultsCollection();
    const result = await resultsCollection.insertOne(newResults);
    return {success: true, result};
  }
  catch(error){
    return { error: 'Failed to add result!' };
  };
};
