import express, { Express, Request, Response } from 'express';
const app: Express = express();
const path = require('path');
const port = 3000;
const authController = require('./controllers/authController');
const statController = require('./controllers/statController');

// need to write route to render the front end from the build file (webpack output)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello From the Backend!')
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})

