import { DBConnection, client } from "@/utils/DBConnect";

const products = async (req, res) => {
  await DBConnection();

  const productsCollection = client
    .db(process.env.DB_NAME)
    .collection(process.env.DB_PRODUCTS_COLLECTION);

  if (req.method === "GET") {
    try {
      const products = await productsCollection.find({}).toArray();

      if (!products) {
        res.send("Products not found");
      }

      res.send(products);
    } catch (error) {
      console.error("Error get products data", error);
    }
  }
};

export default products;
