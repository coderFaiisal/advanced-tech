import { DBConnection, client } from "@/utils/DBConnect";

const category = async (req, res) => {
  await DBConnection();

  const categoriesCollection = client
    .db(process.env.DB_NAME)
    .collection(process.env.DB_CATEGORIES_COLLECTION);

  if (req.method === "GET") {
    const categoryName = req.query;

    const category = await categoriesCollection.findOne({
      name: categoryName,
    });

    res.send(category);
  }
};

export default category;
