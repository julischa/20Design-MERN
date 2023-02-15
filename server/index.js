import express from "express";
import router from "./routes/designerRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cloudinaryConfig from "./configuration/cloudinary.js";
dotenv.config();

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

var corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

app.use(cors(corsOptions));

//app.use("/api/designers", router);
app.use("/api", router);
app.use("/api/user", userRoutes);

const port = process.env.PORT || 5002;
app.listen(port, () => {
  console.log("Server is running on " + port + "port");
});

const mongoDBConnection = async () => {
  await mongoose.set("strictQuery", false);
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB is running in port :>> ", port);
  } catch (error) {
    console.log("error connecting to MongoDB", error);
  }
};

mongoDBConnection();
cloudinaryConfig();
