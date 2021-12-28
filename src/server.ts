import express, { Request, Response } from 'express';

const PORT = 8000;
const app = express();

app.get('/', (req: Request, res: Response) => {
    res.json(PORT)
});


app.listen(PORT, () => {
    console.log('[ Server ] Running at localhost:8000');
});

