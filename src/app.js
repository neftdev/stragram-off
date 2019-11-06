if (process.env.NODE_ENV === "development") {
  require("dotenv").config();
}

import express from "express";
import morgan from "morgan";
import multer from "multer";
import cors from "cors";
import path from "path";

import badWordsRoute from "./routes/badwords";
import imageRoute from "./routes/image";

const app = express();

// Middleware
app.use(morgan("dev"));
const storage = multer.diskStorage({
  destination: path.join(__dirname, "public/uploads"),
  filename(req, file, cb) {
    cb(null, new Date().getTime() + path.extname(file.originalname));
  }
});
app.use(multer({ storage }).single("image"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/api", badWordsRoute);
app.use("/api", imageRoute);

// Server
app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
