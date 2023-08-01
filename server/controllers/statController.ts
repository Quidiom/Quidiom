const statController: any = {};
import { Request, Response, NextFunction } from 'express';

statController.enterScore = (req: Request, res: Response, next: NextFunction) => {
  // 
  return next()
};

statController.fetchLeaderboard = (req: Request, res: Response, next: NextFunction) => {
  // try to get * from SQL database
  // format will be as an array of objects, where each object represents a row in the data set
  // return the array of objects with next()
  // if unable to fetch from db, invoke the global error handler
  return next()
};

module.exports = statController