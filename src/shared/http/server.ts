import "reflect-metadata";
// import  '@shared/typeorm'

import { Request, Response } from 'express';
import express = require('express');
import cors = require('cors');

const PORT = 8000;
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.json(PORT)
});


app.listen(PORT, () => {
    console.log('[ Server ] Running at localhost:8000');
});

