const { MongoClient } = require('mongodb');

let client;
let db;

const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017';
    const dbName = process.env.DB_NAME || 'postcraft';

    client = new MongoClient(uri);
    await client.connect();
    db = client.db(dbName);

    console.log('Connected to MongoDB');
    return db;
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
};

const getDB = () => {
  if (!db) {
    throw new Error('Database not connected. Call connectDB() first.');
  }
  return db;
};

const closeDB = async () => {
  if (client) {
    await client.close();
    console.log('MongoDB connection closed');
  }
};

module.exports = {
  connectDB,
  getDB,
  closeDB,
};
