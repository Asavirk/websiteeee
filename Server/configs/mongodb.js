import mongoose from 'mongoose';

// MongoDB Connect (Moved to a separate config file)
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected ✅");
  } catch (err) {
    console.log("MongoDB Connection Error ❌", err);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;