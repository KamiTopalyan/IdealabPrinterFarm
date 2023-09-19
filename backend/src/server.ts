
import express from 'express';
import cors from 'cors';
import path from "path";
import multer from 'multer';
const PORT = 3001;

const app = express();
const router = express.Router();

const upload = multer();

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
};
app.use(express.json());
app.use(cors(corsOptions));

router.post('/upload', upload.single("file"), (req: any, res: any) => {
    console.log(req.file.buffer.toString());
    res.status(200).json({message: req.body});
});


app.use('/api', router);


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});