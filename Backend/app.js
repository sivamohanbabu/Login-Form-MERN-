const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 3000;
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
mongoose
  .connect("mongodb://localhost:27017/userDB")
  .then(() => console.log("DB is connected"))
  .catch((err) => console.log(err));
const userSchema = mongoose.Schema({
  name: String,
  email: String,
});
const user = mongoose.model("user", userSchema);

app.post("/", (req, res) => {
  const { name, email } = req.body;

  const newUser = new user({ name, email });

  newUser.save();
});
app.get("/users,", (req, res) => {
  const users = { name, email };

  res.send(users.find());
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
