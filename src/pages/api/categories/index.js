import { DBConnection, client } from "@/utils/DBConnect";

const categories = async (req, res) => {
  await DBConnection();

  const categoriesCollection = client
    .db(process.env.DB_NAME)
    .collection(process.env.DB_CATEGORIES_COLLECTION);

  if (req.method === "GET") {
    const categories = await categoriesCollection.find({}).toArray();
    res.send(categories);
  }
};

export default categories;
