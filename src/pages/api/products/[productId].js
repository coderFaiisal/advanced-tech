import { DBConnection, client } from "@/utils/DBConnect";
import { ObjectId } from "mongodb";

const product = async (req, res) => {
  await DBConnection();

  const productsCollection = client
    .db(process.env.DB_NAME)
    .collection(process.env.DB_COLLECTION_NAME);

  const { productId } = req.query;
  console.log(req.query);

  if (req.method === "GET") {
    const product = await productsCollection.findOne({
      _id: new ObjectId(productId),
    });

    res.send(product);
  }
};

export default product;
