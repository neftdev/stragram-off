if (process.env.NODE_ENV === "development") {
  const result = require("dotenv").config();
  if (result.error) {
    throw result.error;
  }
}

import express from "express";
import morgan from "morgan";
import cors from "cors";
import multer from "multer";
import path from "path";

import badWordsRoute from "./routes/badwords";
import imageRoute from "./routes/image";

const app = express();

const storage = multer.diskStorage({
  destination: path.join(__dirname, "public/uploads"),
  filename(req, file, cb) {
    cb(null, new Date().getTime() + path.extname(file.originalname));
  }
});

// Middleware
app.use(morgan("dev"));
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(multer({ storage }).single("image"));

// Routes
app.use("/api", badWordsRoute);
app.use("/api", imageRoute);

// Server
app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
