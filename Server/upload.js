// import { CloudinaryStorage } from 'multer-storage-cloudinary';
import multer from 'multer';
// import cloudinary from './cloudinaryConfig.js';

// Cloudinary Storage Configuration
const storage = multer.diskStorage({
  destination:function(req,file,cb){
    cb(null,'./uploads')
  },
  filename:function(req,file,cb){
    const uniqueSuffix=Date.now()
    cb(null,uniqueSuffix +'-'+ file.originalname)
  }
})

// Export upload function
const upload = multer({ storage: storage });

export default upload;
