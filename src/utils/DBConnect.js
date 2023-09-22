const { MongoClient, ServerApiVersion } = require("mongodb");

export const client = new MongoClient(process.env.DB_URL, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export const DBConnection = async () => {
  try {
    await client.connect();
    console.log("Database connection successfull");
  } catch (error) {
    console.log("Failed to connect database");
  }
};
