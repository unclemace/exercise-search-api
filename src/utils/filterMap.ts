import { FilterGroup, IFilter } from '../types/types';

export const filterMap = {
    toFilter: (valuesArr: string[], name: FilterGroup):IFilter => {
        return  {
            values: valuesArr,
            filterGroup:name
        };
    }
}