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

export interface IExerciseV2 {
    name: string;
    description: string;
    image_src: string;
    required_equipment: string;
    muscle_group: {
        name: string,
        value: string
    }[]
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