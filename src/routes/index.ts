import express from 'express'
import { exercisesRoutes } from './exercisesRoutes';

export const routes = express.Router();

routes.use(exercisesRoutes);