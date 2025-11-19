import express from 'express';
import upload from './middlewares/fileUploadMiddleware.js';
import { PORT } from "./config/env.js";

const app = express();


app.post("/upload", upload.single("file"), (req, res) => {
    res.json({ message: "File Uploaded Successfully" });
});

app.get("/hi", (req, res) => {
    res.json({ message: "Hello From Codespaces" });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;