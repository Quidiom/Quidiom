const authController: any = {};
import { Request, Response, NextFunction } from 'express';
import { pool } from '../server'

authController.createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // get a username and password from req.body, and destructure!
    const createQuery = 'INSERT INTO users (username, password) VALUES ($1, $2);'
    const { username, password } = req.body;
    const createQueryParams = [username, password];
    console.log(username)
    console.log(password)
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
authController.login = (req: Request, res: Response, next: NextFunction) => {
  
  return next()
}

authController.logout = (req: Request, res: Response, next: NextFunction) => {
  
  return next()
}

authController.forgotPassword = (req: Request, res: Response, next: NextFunction) => {
  
  return next()
}

authController.setCookie = (req: Request, res: Response, next: NextFunction) => {
  // how will login tokens be passed on the front end?
  return next()
}

authController.checkCookie = (req: Request, res: Response, next: NextFunction) => {
  
  return next()
}

module.exports = authController