import { v2 as cloudinary } from "cloudinary"

export default function CloudinaryInit(){
  cloudinary.config({
    cloud_name: 'duwzronom',
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
  });
  
}

