import express from 'express';
import cors from 'cors';
import { isIFilterArray } from './types/types';
import {filterExercises, getExercises} from './services/exercisesService';

const app = express();

app.use(cors());

app.get('/filterExercises', async (req, res) => {
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
});

app.listen(8080, () => {
    console.log('Server listening on port 8080');
});