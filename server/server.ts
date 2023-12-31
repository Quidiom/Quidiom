import express, { Express, NextFunction, Request, Response, } from 'express';
const { Pool } = require('pg');
require("dotenv").config();
const connectionString: string | undefined = process.env.PG_CONNECTION_STRING;
export const pool = new Pool({ connectionString });
const app: Express = express();
const path = require('path');
const port = 3000;
const authController = require('./controllers/authController');
const statController = require('./controllers/statController');

console.log(connectionString)

// need to write route to render the front end from the build file (webpack output)
app.use(express.json());
// test route
// app.get('/api', (req: Request, res: Response) => {
//   res.send('Hello from the backend! =)')
// })

app.post('/api/updateScore', statController.updateScore, (req: Request, res: Response) => {
  res.sendStatus(200);
})

app.get('/api/leaderboard', statController.fetchLeaderboard, (req: Request, res: Response) => {
  res.status(200).send(res.locals.leaderboard);
})

app.post('/api/createUser', authController.createUser, authController.populateTables, (req: Request, res: Response) => {
  res.sendStatus(200);
})

app.post('/api/login', authController.login, (req: Request, res: Response) => {
  res.status(200).json(res.locals.username);
})

// unknown route handler
app.use((req, res) => {
  res.status(404).send('Page not found')
})

// global error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction): any => {
  const defaultError = {
    log: 'Middleware error',
    status: 500,
    message: 'Express caught an unknown error in middleware',
  }
  const errorObject = Object.assign(defaultError, err)
  // console.log(errorObject);
  // console.log(errorObject.log)
  res.status(errorObject.status).json(errorObject.message)
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})

