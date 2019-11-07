if (process.env.NODE_ENV === "development") {
  const result = require("dotenv").config();
  if (result.error) {
    throw result.error;
  }
}

import AWS from "aws-sdk";

const rekognition = new AWS.Rekognition({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

export const analyzeImage = async (req, res) => {
  try {
    const { image } = req.body;
    let Bytes = Buffer.from(image, "base64");
    let params = {
      Image: {
        Bytes
      },
      MinConfidence: 80
    };
    const result = await rekognition.detectModerationLabels(params).promise();
    return res.status(200).json({
      message: "Analyze of an image",
      ModerationLabels: result.ModerationLabels
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server error" });
  }
};
