import { DBConnection, client } from "@/utils/DBConnect";

const category = async (req, res) => {
  await DBConnection();

  const categoriesCollection = client
    .db(process.env.DB_NAME)
    .collection(process.env.DB_CATEGORIES_COLLECTION);

  if (req.method === "GET") {
    const categoryName = req.query;

    try {
      const category = await categoriesCollection.findOne({
        name: categoryName,
      });

      if (!category) {
        res.send("Product not found");
      }

      res.send(category);
    } catch (error) {
      console.error("Error get category data", error);
      res.send("Internal server error");
    }
  }
};

export default category;
