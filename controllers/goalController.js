// goalController.js

const { Goal } = require('../models/goal');
const goalService = require('../services/goalService');
//const Goal = require('../models/goal');

const getAllGoals = async (req, res) => {
  try {
    const goals = await Goal.find({});
    res.status(200).json({
      status: 'success',
      data: {
        goals: goals
      }

    });

  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: err.message
    });
  }

};

const getAllGoalsByUser = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const goals = await goalService.getAllGoals(userId);
    res.json(goals);
  } catch (error) {
    console.error(error.message); 
    //next(error);
  }
};

const getGoalById = async (req, res, next) => {
  try {
    const { userId, goalId } = req.params;
    const goal = await goalService.getGoalById(userId, goalId);
    res.json(goal);
  } catch (error) {
    console.error(error.message); 
    //next(error);
  }
};

const createGoal = async (req, res, next) => {
  try {
    const {userId } = req.params;
    const newGoal = await goalService.createGoal(userId, req.body);
    res.status(201).json(newGoal);
  } catch (error) {
    console.error(error.message); 
    //next(error);
  }
};

const updateGoal = async (req, res, next) => {
  try {
    const { userId, goalId } = req.params;
    const updatedGoal = await goalService.updateGoal(userId, goalId, req.body);
    res.json(updatedGoal);
  } catch (error) {
    console.error(error.message); 
    //next(error);
  }
};

const deleteGoal = async (req, res, next) => {
  try {
    const { userId, goalId } = req.params;
    const message = await goalService.deleteGoal(userId, goalId);
    res.json({ message });
  } catch (error) {
    console.error(error.message); 
    //next(error);
  }
};

module.exports = {
  getAllGoals,
  getAllGoalsByUser,
  createGoal,
  updateGoal,
  deleteGoal,
  getGoalById
};
