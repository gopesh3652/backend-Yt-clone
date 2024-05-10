import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRETE,
});

const uploadToCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    // file upload on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    // file has been uploaded successfully
    // console.log("File is uploaded on cloudinary", response.url);
    // console.log("Cloudinary:\n\n", response);
    fs.unlinkSync(localFilePath); // remove the local saved temporary file as the eupload operation got failed
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); // remove the local saved temporary file as the eupload operation got failed
    return null;
  }
};

export { uploadToCloudinary };
