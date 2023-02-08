import express from "express";
import router from "./routes/test.js";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

var corsOptions = {
  origin: "http://localhost:5000",
  credentials: true,
};

app.use(cors(corsOptions));

const port = process.env.PORT || 5002;
app.listen(port, () => {
  console.log("Server is running on " + port + "port");
});

app.use("/api", router);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connection to Mongo DB established"))
  .catch((err) => console.log(err));
