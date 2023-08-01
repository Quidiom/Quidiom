const statController: any = {};
import { Request, Response, NextFunction } from 'express';
import { pool } from '../server'

// Queries 
const getUserId = 'SELECT _id FROM users WHERE username = $1'

statController.updateScore = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username, numCorrect, difficulty} = req.body;

    const getUserIdParams = [username];
    const userId = (await pool.query(getUserId, getUserIdParams)).rows[0]._id;

    const checkIfUserExists = `SELECT * FROM ${difficulty} WHERE user_id = $1`
    const userExistsParams = [userId];
    const userExists = (await pool.query(checkIfUserExists, userExistsParams)).rows[0];

    const updateParams = [numCorrect, userId];
    if (userExists) {
      const update = `UPDATE ${difficulty} SET correct = correct + $1, total = total + 10 WHERE user_id = $2;`
      await pool.query(update, updateParams);
    } else {
      const insert = `INSERT INTO ${difficulty} (correct, total, user_id) VALUES ($1, 10, $2);`      
      await pool.query(insert, updateParams);
    }

    return next()

  } catch (e) {
    return next({
      log: 'Express error handler caught an error when trying to update score',
      status: 500,
      message: {e: 'An error occured'}
    })
  }
  /* this middleware should be invoked at the end of each round to update the user's stats in the database
  first, we will ask the front end if they were playing on easy, medium, or hard, and then go to 
  the user's corresponding easy/medium/hard table
  we then update that user's easy/medium/hard table, adding the amount correct to correct and 10 to the toal
  the above will return in a try/catch block
  if the database interaction fails, we'll send an error through the catch block
  if successful, we'll just return status 200, as this middleware doesn't need to return any data
  */

};

statController.fetchLeaderboard = async (req: Request, res: Response, next: NextFunction) => {
  try {

  } catch (e) {
    return next({
      log: 'Express error handler caught an error when trying to fetch leaderboard',
      status: 500,
      message: {e: 'An error occured'}
    })
  }
  // try to get * from SQL database
  // format will be as an array of objects, where each object represents a row in the data set
  // return the array of objects with next()
  // if unable to fetch from db, invoke the global error handler
  return next()
};

module.exports = statController

/**
 * INSERT INTO easy (correct, total, user_id) 
VALUES (7, 10, 2);

UPDATE easy 
SET correct = 6, total = 10
WHERE user_id = 2;

 */