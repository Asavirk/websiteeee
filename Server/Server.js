import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import connectDB from './configs/mongodb';

// App Config
const PORT = process.env.PORT || 4000;
const app = express();
await connectDB();

// Middleware
app.use(express.json());
app.use(cors());


// API Routes
app.get('/', (req, res) => {
  res.send("API working ✅");
  
});

// Start Server
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
