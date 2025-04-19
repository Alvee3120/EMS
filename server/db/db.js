// import mongoose from "mongoose";

// const connectToDatabse = async () => {

//     try{
//         await mongoose.connect(process.env.MONGODB_URL)
//     } catch (error){
//         console.log(error)
        
//     }
// }

// export default connectToDatabse;

import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1);
  }
};

export default connectToDatabase;
