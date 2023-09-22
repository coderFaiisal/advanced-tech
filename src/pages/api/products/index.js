import { DBConnection, client } from "@/utils/DBConnect";

const products = async (req, res) => {
  await DBConnection();

  const productsCollection = client
    .db(process.env.DB_NAME)
    .collection(process.env.DB_COLLECTION_NAME);

  if (req.method === "GET") {
    const products = await productsCollection.find({}).toArray();
    res.send(products);
  }
};

export default products;
