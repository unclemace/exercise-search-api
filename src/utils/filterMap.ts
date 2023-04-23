import { FilterGroup, IFilter } from '../types/types';

export const filterMap = {
    toFilter: (valuesArr: string[], filterGroup: FilterGroup):IFilter => {
        return  {
            values: valuesArr? valuesArr: [],
            filterGroup: filterGroup
        };
    },
    toFiltersArray: (rawArr: any[]):IFilter[] => {
        return rawArr.map(el => filterMap.toFilter(el.values, el.filterGroup));
    }
}