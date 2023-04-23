import asyncHandler from 'express-async-handler';
import { filterMap } from '../utils/filterMap';
import { filterExercises, getExercises, getRatedExercises, sortExercisesByRating } from '../services/exercisesService';
import { IFilter, IRatedExercise, isIFilterArray } from '../types/types';

exports.filter_exercises = asyncHandler(async (req,res) => {
    const chosenFilters = req.query.chosenFilters;
    if (Array.isArray(chosenFilters) && isIFilterArray(chosenFilters)) {
        const filteredExercises = await filterExercises(chosenFilters, { rated: false });
        res.json(filteredExercises);
    }
    else {
        const exercises = await getExercises();
        res.json(exercises);
    }
})

exports.filter_exercises_v2 = asyncHandler(async (req,res) => {
    const chosenFiltersQuery = req.query.chosenFilters as Object;
    if (Array.isArray(chosenFiltersQuery)){
        const chosenFilters: IFilter[]  = filterMap.toFiltersArray(chosenFiltersQuery);
        const filteredExercises = await filterExercises(chosenFilters, { rated: true });
        res.json(sortExercisesByRating(filteredExercises as IRatedExercise[]))
    }
    else {
        const exercises = await getRatedExercises();
        res.json(sortExercisesByRating(exercises));
    }
})