import mongoose from 'mongoose';

const mongoDB = "";

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
