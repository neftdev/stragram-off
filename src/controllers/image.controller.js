import AWS from "aws-sdk";

const rekognition = new AWS.Rekognition({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

export const analyzeImage = async (req, res) => {
  try {
    console.log(req);
    // const { type } = req.body;
    // if (type) {
    //   let params = null;
    //   if (type === "bytes") {
    //     const { Bytes } = req.body;
    //     params = {
    //       Image: {
    //         Bytes
    //       }
    //     };
    //   } else {
    //     params = {
    //       Image: {
    //         Bytes
    //       }
    //     };
    //   }
    //   const result = await rekognition.detectModerationLabels(params).promise();
    // }
    return res.status(200).json("Hola");
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal Server error");
  }
};
