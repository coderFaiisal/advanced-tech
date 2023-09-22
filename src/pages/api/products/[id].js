import { DBConnection, client } from "@/utils/DBConnect";
import { ObjectId } from "mongodb";

const product = async (req, res) => {
  await DBConnection();

  const productsCollection = client
    .db(process.env.DB_NAME)
    .collection(process.env.DB_COLLECTION_NAME);

  const { id } = req.query;

  if (req.method === "GET") {
    const product = await productsCollection.findOne({
      _id: new ObjectId(id),
    });

    res.send(product);
  }
};

export default product;
