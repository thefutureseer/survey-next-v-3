// Import the getMovies function from the "@lib/mongo/movie" module
import { getMovies } from "@lib/mongo/movie";

// Define an asynchronous request handler function
const handler = async (req, res) => {
  // Check if the request method is GET
  if (req.method === 'GET') {
    try {
      // Call the getMovies function to retrieve movies
      const { movies, error } = await getMovies();

      // If an error occurred during movie retrieval, throw an error
      if (error) throw new Error(error);

      // If movies were successfully retrieved, send them as JSON response with status 200
      return res.status(200).json({ movies });
    } catch (error) {
      // If an error occurred during processing, send an error response with status 500
      return res.status(500).json({ error: error.message });
    }
  }

  // If the request method is not GET, set the allowed methods header and send status 425
  res.setHeader('Allow', ['GET']);
  res.status(425).end(`Method ${req.method} is not allowed. `)
}

// Export the request handler function
export default handler;
