import multer from 'multer';
import path from 'path';
import { v4 as uuidV4 } from 'uuid';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../../storage')); // 指定文件上传目录
  },
  filename: function (req, file, cb) {
    cb(null, uuidV4() + path.extname(file.originalname)); // 指定文件名
  },
});

// 创建文件上传中间件
export default multer({ storage: storage });
