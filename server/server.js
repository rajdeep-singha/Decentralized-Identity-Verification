const express = require("express");
const cors = require("cors");
require("dotenv").config();
const pool = require("./config/db"); // Import MySQL connection

const authRoutes = require("./routes/authRoutes");
const identityRoutes = require("./routes/identityRoutes");

const app = express();
app.use(express.json());
app.use(cors());

// Define Routes
app.use("/api/auth", authRoutes);
app.use("/api/identity", identityRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
