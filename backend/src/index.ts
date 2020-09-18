import express from 'express';
import multer from 'multer';
const upload = multer({ dest: 'uploads/' });

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('profile', upload.single('avatar'), (req) => {
    console.log(req.file);
});
app.post('photos/upload', upload.array('photos', 12), (req) => {
    console.log(req.files);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
