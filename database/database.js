const { MongoClient, ServerApiVersion } = require("mongodb");
const dotenv = require("dotenv");
dotenv.config();

if (!process.env.DB_URI) {
  throw new Error("Mongo URI not found!");
}

const client = new MongoClient(process.env.DB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function initializeDatabase(databaseName) {
  try {
    await client.connect();
    console.log("Database initialized.");
    return client.db(databaseName);
  } catch (error) {
    console.error("Error initializing Database", error);
  }
}

exports.getCollection = async (collectionName) => {
  if (!process.env.MAIN_DB) {
    throw new Error("MAIN_DB not faund.");
  }

  const db = await initializeDatabase(process.env.MAIN_DB);
  if (db) return db.collection(collectionName);

  return null;
};
