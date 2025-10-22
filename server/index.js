require("dotenv").config();
const express = require("express");
const dbConfig = require("./dbConfig/dbConfig");
const app = express();
const port = process.env.PORT || 4000;
const cookieParser = require("cookie-parser");
const compression = require("compression");
const cors = require("cors");
const authRoute = require("./routes/authRoute");
const packageRoute = require("./routes/packageRoute");
const bookingRoute = require("./routes/bookingRoute");
const overviewRoute = require("./routes/overviewRoute");

// ======== dbconfig
dbConfig();

// ======== middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compression());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:3000",
      "https://aliairtravels.com",
      process.env.CLIENT_URL,
      process.env.ADMIN_URL,
    ],
    credentials: true,
  })
);

// =========== routes
app.use("/api/auth", authRoute);
app.use("/api/package", packageRoute);
app.use("/api/booking", bookingRoute);
app.use("/api", overviewRoute);

app.get("/", (req, res) => {
  res.send("server is running");
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
