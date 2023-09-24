import { DBConnection, client } from "@/utils/DBConnect";

const categories = async (req, res) => {
  await DBConnection();

  const categoriesCollection = client
    .db(process.env.DB_NAME)
    .collection(process.env.DB_CATEGORIES_COLLECTION);

  if (req.method === "GET") {
    try {
      const categories = await categoriesCollection.find({}).toArray();

      if (!categories) {
        res.send("Products not found");
      }

      res.send(categories);
    } catch (error) {
      console.error("Error get categories data", error);
    }
  }
};

export default categories;
