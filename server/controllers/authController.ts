const authController: any = {};
import { Request, Response, NextFunction } from 'express';

authController.setCookie = (req: Request, res: Response, next: NextFunction) => {
  // how will login tokens be passed on the front end?
  return next()
}

authController.checkCookie = (req: Request, res: Response, next: NextFunction) => {
  
  return next()
}

module.exports = authController