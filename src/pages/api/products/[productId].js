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
      try {
        const products = await productsCollection
          .find({
            category: productId,
          })
          .toArray();

        if (!products) {
          res.send("Products not found");
        }

        res.send(products);
      } catch (error) {
        console.error("Error get products data", error);
      }
    } else {
      try {
        const product = await productsCollection.findOne({
          _id: new ObjectId(productId),
        });

        if (!product) {
          res.send("Products not found");
        }

        res.send(product);
      } catch (error) {
        console.error("Error get products data", error);
      }
    }
  }
};

export default products;
