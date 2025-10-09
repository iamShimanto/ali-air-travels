require("dotenv").config();
const express = require("express");
const dbConfig = require("./dbConfig/dbConfig");
const app = express();
const port = process.env.PORT || 4000;
const cookieParser = require("cookie-parser");
const compression = require("compression");
const cors = require("cors");
const authRoute = require("./routes/authRoute");

// ======== dbconfig
dbConfig();

// ======== middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compression());
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:3000"],
    credentials: true,
  })
);

// =========== routes
app.use("/api/auth", authRoute);

app.get("/", (req, res) => {
  res.send("server is running");
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
