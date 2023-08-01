const authController: any = {};
import { Request, Response, NextFunction } from 'express';

authController.createUser = (req: Request, res: Response, next: NextFunction) => {
  
  return next()
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