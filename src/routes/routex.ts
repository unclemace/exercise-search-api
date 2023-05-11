import { Router } from 'express';
import {isIFilterArray} from "../types/types";
import {filterExercises, getExercises} from "../services/exercisesService";

export const defaultRoute = Router();

defaultRoute.get('/filterExercises', async (req, res) => {
    try {
        const chosenFilters = req.query.chosenFilters;
        if (Array.isArray(chosenFilters)) {
            if(isIFilterArray(chosenFilters)){
                const filteredExercises = await filterExercises(chosenFilters);
                return res.json(filteredExercises)
            }
        }
        const exercises = await getExercises();
        return res.json(exercises);
    } catch (err) {
        return res.status(500).send(err);
    }
})