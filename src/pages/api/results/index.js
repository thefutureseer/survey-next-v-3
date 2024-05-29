import { addResults, getresults } from "@/lib/mongo/operations";
const handler = async (req, res) => {
  if (req.method === 'GET') {
    try {
      const { results, error } = await getresults();
      if (error) throw new Error(error);
      return res.status(200).json({ results });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    };
  } else if (req.method === 'POST'){
   try {
     const newResult = req.body;
     const { success, result, error } = await addResults(newResult);
     if (error) throw new Error(error);
     return res.status(201).json({success: result});
    } catch(error) {
      res.status(500).json({error: error.message});
    };
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method: ${req.method} is not allowed`);
  };
};
export default handler;