import { DBConnection, client } from "@/utils/DBConnect";
import { ObjectId } from "mongodb";

const products = async (req, res) => {
  await DBConnection();

  const productsCollection = client
    .db(process.env.DB_NAME)
    .collection(process.env.DB_PRODUCTS_COLLECTION);

  const { productId } = req.query;

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
    if (category.includes(productId)) {
      const products = await productsCollection
        .find({
          category: productId,
        })
        .toArray();
      res.send(products);
    } else {
      const product = await productsCollection.findOne({
        _id: new ObjectId(productId),
      });
      res.send(product);
    }
  }
};

export default products;
