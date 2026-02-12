import jwt from 'jsonwebtoken';

// Middleware to authenticate user using JWT
const authUser = async (req, res, next) => {
  try {
    // Get token from headers (Bearer <token>)
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ error: "No token provided" });
    }

    const token = authHeader.split(" ")[1]; // extract token
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // verify token

    req.clerkID = decoded.clerkID; // attach clerkID to request
    next();

  } catch (error) {
    console.log("Error in auth middleware:", error.message);
    return res.status(401).json({ error: "Invalid or expired token" });
  }
};

export default authUser;
