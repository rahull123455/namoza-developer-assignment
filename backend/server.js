const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
const consultationRoutes = require("./routes/consultationRoutes");

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Register routes
app.use("/api", consultationRoutes);

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Namoza Backend API Running 🚀"
    });
});

app.get("/api/test", (req, res) => {
    res.json({
        success: true,
        message: "Database Connected Successfully"
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});