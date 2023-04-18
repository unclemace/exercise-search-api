import asyncHandler from 'express-async-handler';
import { filterMap } from '../utils/filterMap';
import { filterExercises, getExercises } from '../services/exercisesService';
import { IFilter } from '../types/types';

exports.filter_exercises = asyncHandler(async (req,res) => {
    const chosenFiltersQuery = req.query.chosenFilters as Object;
    if (Array.isArray(chosenFiltersQuery)){
        const filters: IFilter[]  = chosenFiltersQuery.map(el => filterMap.toFilter(el.values, el.filterGroup));
        const exercises = await filterExercises(filters);
        res.json(exercises)
    }
    else {
        const exercises = await getExercises();
        res.json(exercises);
    }
})

exports.filter_exercises_v2 = asyncHandler(async (req,res) => {
    const chosenFiltersQuery = req.query.chosenFilters as Object;
    if (Array.isArray(chosenFiltersQuery)){
        const filters: IFilter[]  = chosenFiltersQuery.map(el => filterMap.toFilter(el.values, el.name));
        const exercises = await filterExercises(filters);
        res.json(exercises)
    }
    else {
        const exercises = await getExercises();
        res.json(exercises);
    }
})