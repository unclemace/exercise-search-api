import asyncHandler from 'express-async-handler';
import { filterMap } from '../utils/filterMap';
import { filterExercises, filterExercisesV2, getExercises, getExercisesV2 } from '../services/exercisesService';
import { IFilter, isIFilterArray } from '../types/types';

exports.filter_exercises = asyncHandler(async (req,res) => {
    const chosenFilters = req.query.chosenFilters;
    if (Array.isArray(chosenFilters) && isIFilterArray(chosenFilters)) {
        const filteredExercises = await filterExercises(chosenFilters);
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
        const filteredExercises = await filterExercisesV2(chosenFilters);
        res.json(filteredExercises)
    }
    else {
        const exercises = await getExercisesV2();
        res.json(exercises);
    }
})