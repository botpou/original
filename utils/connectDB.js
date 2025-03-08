import mongoose from 'mongoose';

const mongoDB = "mongodb+srv://andymrlit:bro@sukunabot.pgt5mzx.mongodb.net/?retryWrites=true&w=majority";

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
