import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import connectDB from './configs/mongodb.js';
import userRouter from './routes/userRoutes.js';

const PORT = process.env.PORT || 4000;
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.get('/', (req, res) => {
  res.send("API working ✅");
});

app.use('/api/users', userRouter);

// Connect to DB and start server
const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () =>
      console.log(`Server running on PORT ${PORT} 🚀`)
    );
  } catch (err) {
    console.error("Failed to start server:", err);
  }
};

startServer();
