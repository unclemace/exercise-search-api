export interface IExercise {
    name: string;
    description: string;
    imageSrc: string;
    requiredEquipment: string;
    muscleGroup: string[];
}

export interface IRatedExercise extends IExercise {
    rating: number;
}

export interface IFilterParams {
    rated: boolean
}

export interface IFilter {
    values: string[];
    filterGroup: FilterGroup;
}

export type FilterGroup = 'Equipment' | 'Muscle group';

export const isIFilter = (obj: any): obj is IFilter => {
    return obj && Array.isArray(obj.values) && typeof obj.filterGroup === 'string';
}

export const isIFilterArray = (obj: any): obj is IFilter[] => {
    return (obj as any[]).every(value => isIFilter(value));
}