import mongoose from 'mongoose';

const mongoDB = "mongodb://mongo:aUXafrFEfHGoHEEpQgIPsLYFRErPzJJi@interchange.proxy.rlwy.net:23270";

let isConnected = false;

const ConnectDB = async () => {
  if (isConnected) {
    return;
  }

  try {
    // Remove deprecated options
    await mongoose.connect(mongoDB);
    
    isConnected = true;
    console.log("Connected to MongoDB.");
    
    // Handle connection events
    mongoose.connection.on('error', (err) => {
      console.error('MongoDB connection error:', err);
      isConnected = false;
    });
    
    mongoose.connection.on('disconnected', () => {
      console.log('MongoDB disconnected');
      isConnected = false;
    });
    
    mongoose.connection.on('reconnected', () => {
      console.log('MongoDB reconnected');
      isConnected = true;
    });
    
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    isConnected = false;
    throw error;
  }
};

export default ConnectDB;