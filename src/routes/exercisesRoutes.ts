import { Router } from 'express';

export const exercisesRoutes = Router();

const exercisesController = require('../controllers/exercisesController');

exercisesRoutes.get('/filterExercises', exercisesController.filter_exercises);

exercisesRoutes.get('/filterExercisesV2', exercisesController.filter_exercises_v2);