import "reflect-metadata";
import  '@shared/typeorm';

import { Request, Response } from 'express';
import express = require('express');
import cors = require('cors');
import AppError from "@shared/errors/AppError";
import routes from "./routes";

const PORT = 8000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);



app.use(
    (error: Error, request: Request, response: Response, next: express.NextFunction) => {
      if (error instanceof AppError) {
        console.log(error);
        return response
          .status(error.statusCode)
          .json({ status: 'error', message: error.message });
          
      }
      console.log(error);
      return response
        .status(500)
        .json({ status: 'error', message: 'Internal Server Error' });
        
    },
  );


app.get('/', (req: Request, res: Response) => {
    res.json(PORT)
});


app.listen(PORT, () => {
    console.log('[ Server ] Running at localhost:8000 [ Server ]' );
});

