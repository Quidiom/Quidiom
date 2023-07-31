import express, { Express, Request, Response } from 'express';
const app: Express = express();
const path = require('path');
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello From the Backend!');
});




app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
