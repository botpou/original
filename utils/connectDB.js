import mongoose from 'mongoose';

const mongoDB = "mongodb://root:ZKu0y7TuVZcownDCsKm3fI2VfsSgZJOFZDs9XNFJvJ0bEFImU2zKQpcjAduSgwWg@e40gskg80cg8c4kcwoc80owk:27017/?directConnection=true";

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
