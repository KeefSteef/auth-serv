const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./authRoutes");
const PORT = process.env.PORT || 7777;

const app = express();

app.use(express.json());
app.use("/auth", authRoutes);

const start = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://qwerty:qwerty123@cluster0.oym5q.mongodb.net/auth_roles?retryWrites=true&w=majority"
    );
    app.listen(PORT, () =>
      console.log(`Server successful running on PORT ${PORT}`)
    );
  } catch (e) {
    console.log(e);
  }
};

start();
