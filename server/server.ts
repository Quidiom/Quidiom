import express, { Express, Request, Response,  } from 'express';
const app: Express = express();
const path = require('path');
const port = 3000;
const authController = require('./controllers/authController');
const statController = require('./controllers/statController');

// need to write route to render the front end from the build file (webpack output)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello From the Backend!')
})

// unknown route handler
app.use((req, res) => {
  res.status(404).send('Page not found')
})

// global error handler
app.use((err: Error, req: Request, res: Response) => {
  const defaultError = {
    log: 'Middleware error',
    status: 500,
    message: 'Express caught an unknown error in middleware',
  }
  const errorObject = Object.assign(defaultError, err)
  console.log(errorObject.log)
  res.status(errorObject.status).json(errorObject.message)
})


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})

