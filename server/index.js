// set up express
// set up webpack proxy
// separate client and server modules

const express = require("express");
const mongoose = require("mongoose");
const uri = "mongodb://localhost:27017/solo_1";
mongoose.connect(uri);

const app = express();
const apiRouter = require("./routes/apiRouter");

app.use(express.json());

// app.use("/api", projectController, (req, res) => {
//   res.status(200).json(res.locals.test);
// });
app.use("/api", apiRouter);

app.use("*", (req, res) => {
  res.status(404).json("Not found");
});

app.use((err, req, res, next) => {
  res.status(400).json(err);
});

app.listen(3000, () => {
  console.log("Listening on port 3000...");
});
