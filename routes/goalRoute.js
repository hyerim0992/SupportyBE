// routes/goalRoute.js

const express = require('express');
const router = express.Router();
const goalController = require('../controllers/goalController');

// 특정 사용자 목표 생성
router.post('/goal/:userId', goalController.createGoal);
// 모든 사용자의 모든 목표 조회
router.get('/goal', goalController.getAllGoals);
// 특정 사용자의 모든 목표 조회
router.get('/goal/:userId', goalController.getAllGoalsByUser);
// 특정 사용자의 특정 목표 조회
router.get('/goal/:userId/:goalId', goalController.getGoalById);
// 특정 사용자의 특정 목표 수정
router.put('/goal/:userId/:goalId', goalController.updateGoal);
// 특정 사용자의 특정 목표 삭제
router.delete('/goal/:userId/:goalId', goalController.deleteGoal);

module.exports = router;