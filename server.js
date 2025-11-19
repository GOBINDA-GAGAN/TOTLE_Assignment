const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const topicsRoute = require("./routes/topicsRoute");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

app.use("/api", topicsRoute);

app.get("/", (req, res) => {
 res.status(200).json({
    status: "success",
    message: "API is running...",
    version: "1.0.0",
    environment: process.env.NODE_ENV || "development",
    timestamp: new Date().toISOString(),
    // docs: "/api/docs",
  });
});

app.use((req, res) => {
  res.status(404).json({
    status: 404,
    message: "Endpoint not found",
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
