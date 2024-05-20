// Import the getresults 
import { addResults, getresults } from "@/lib/mongo/operations";

// Define an asynchronous request handler function
const handler = async (req, res) => {
  // Check if the request method is GET
  if (req.method === 'GET') {
    try {
      // Call the getresults function to retrieve results
      const { results, error } = await getresults();

      // If an error occurred during movie retrieval, throw an error
      if (error) throw new Error(error);

      // If results were successfully retrieved, send them as JSON response with status 200
      return res.status(200).json({ results });
    } catch (error) {
      // If an error occurred during processing, send an error response with status 500
      return res.status(500).json({ error: error.message });
    }
  } else if (req.method === 'POST'){
   try {

     //set variable to json string to add to db
     const newResult = req.body;
     //add  to results database
     const { success, result, error } = await addResults(newResult);
     if (error) throw new Error(error);
     return res.status(201).json({success: result});
     
    } catch(error) {
      res.status(500).json({error: error.message});
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method: ${req.method} is not allowed`);
  }
}

// Export the request handler function
export default handler;
