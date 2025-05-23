import mongoose from 'mongoose';

const mongoDB = "mongodb://mongo:aUXafrFEfHGoHEEpQgIPsLYFRErPzJJi@interchange.proxy.rlwy.net:23270";

let isConnected = false;

const ConnectDB = async () => {
  if (isConnected) {
    return;
  }

  try {
    await mongoose.connect(mongoDB, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    isConnected = true;
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default ConnectDB;
