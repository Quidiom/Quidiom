const statController: any = {};
import { Request, Response, NextFunction } from 'express';

// const data = await pool.query('SELECT * FROM users')

statController.updateScore = (req: Request, res: Response, next: NextFunction) => {
  /* this middleware should be invoked at the end of each round to update the user's stats in the database
  first, we will ask the front end if they were playing on easy, medium, or hard, and then go to 
  the user's corresponding easy/medium/hard table
  we then update that user's easy/medium/hard table, adding the amount correct to correct and 10 to the toal
  the above will return in a try/catch block
  if the database interaction fails, we'll send an error through the catch block
  if successful, we'll just return status 200, as this middleware doesn't need to return any data
  */
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