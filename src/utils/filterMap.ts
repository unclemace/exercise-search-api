import { FilterGroup, IFilter } from '../types/types';

export const filterMap = {
    toFilter: (valuesArr: string[], name: FilterGroup):IFilter => {
        return  {
            values: valuesArr,
            filterGroup:name
        };
    },
    toFiltersArray: (rawArr: any[]):IFilter[] => {
        return rawArr.map(el => filterMap.toFilter(el.values, el.name));
    }
}