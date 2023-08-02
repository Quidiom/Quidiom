const authController: any = {};
import { Request, Response, NextFunction } from 'express';
import { pool } from '../server'
import { resourceLimits } from 'worker_threads';

authController.createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // get a username and password from req.body, and destructure!
    const createQuery = 'INSERT INTO users (username, password) VALUES ($1, $2);'
    const { username, password } = req.body;
    const createQueryParams = [username, password];
    // perform an insertion into the SQL db, will look something like this
    await pool.query(createQuery, createQueryParams)
    return next()
  } catch(e) {
    return next({
      log: 'Express error handler caught an error when trying to add new user',
      status: 500,
      message: {e: 'An error occured'}
    })
  }
}

// is login the same thing as setCookie?
authController.login = async (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;
  const userQuery = 'SELECT * FROM users WHERE username = $1';
  const queryParams = [username];
  const userRow = (await pool.query(userQuery, queryParams)).rows[0];
  if (userRow) {
    if (userRow.password === password) {
      return next() 
    } else {
      return next({
        log: 'Express error handler caught incorrect login',
        status: 500,
        message: 'Incorrect password'
      })
    }
  } else {
    return next({
      log: 'Express error handler caught incorrect login',
      status: 500,
      message: 'Incorrect username or password'
    })
  }
// if user login success, send success status, frontend will redirect
// if incorrect username or password trigger global error handler with descriptive message for frontend
}

authController.logout = (req: Request, res: Response, next: NextFunction) => {
  // can one logout without cookies? doesn't make any sense!
  return next()
}

authController.forgotPassword = (req: Request, res: Response, next: NextFunction) => {
  // skip for now
  return next()
}

// skip for now, dicuss at meeting tomorrow morning
authController.setCookie = (req: Request, res: Response, next: NextFunction) => {
  // how will login tokens be passed on the front end?
  return next()
}

authController.checkCookie = (req: Request, res: Response, next: NextFunction) => {
  
  return next()
}

module.exports = authController