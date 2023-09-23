import { DBConnection, client } from "@/utils/DBConnect";
import { ObjectId } from "mongodb";

const product = async (req, res) => {
  await DBConnection();

  const productsCollection = client
    .db(process.env.DB_NAME)
    .collection(process.env.DB_COLLECTION_NAME);

  const { id } = req.query;

  const category = [
    "Processor",
    "Motherboard",
    "Graphics Card",
    "RAM",
    "Power Supply Unit",
    "Storage Device",
    "Monitor",
    "Others",
  ];

  if (req.method === "GET") {
    if (category.includes(id)) {
      const products = await productsCollection
        .find({
          category: id,
        })
        .toArray();
      res.send(products);
    } else {
      const product = await productsCollection.findOne({
        _id: new ObjectId(id),
      });
      res.send(product);
    }
  }
  
};

export default product;
