// const express = require("express");
// const cors = require("cors");
// require("dotenv").config();

// const mediaRoutes = require("./routes/mediaRoutes");

// const app = express();

// app.use(cors());
// app.use(express.json());

// app.use("/api/media", mediaRoutes);

// app.listen(process.env.PORT, () => {
//   console.log(`Server running on port ${process.env.PORT}`);
// });

// app.get("/", (req, res) => {
//   res.send("Backend is running successfully");
// });

const express = require("express");
const cors = require("cors");
require("dotenv").config();

const mediaRoutes = require("./routes/mediaRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/media", mediaRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running successfully");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});