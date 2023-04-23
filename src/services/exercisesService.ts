import { IFilter, IExercise, IRatedExercise, IFilterParams } from '../types/types';
export const getExercises = () => {
    return new Promise<IExercise[]>((resolve, reject) => {
        setTimeout(() => {
            const exercises: IExercise[] = [
                {
                    name: 'Pull up',
                    description: 'A pull-up is an upper-body strength exercise. The pull-up is a closed-chain movement where the body is suspended by the hands, gripping a bar or other implement at a distance typically wider than shoulder-width, and pulled up. As this happens, the elbows flex and the shoulders adduct and extend to bring the elbows to the torso. Pull-ups build up several muscles of the upper body, including the latissimus dorsi, trapezius, and biceps brachii. A pull-up may be performed with overhand (pronated), underhand (supinated)—sometimes referred to as a chin-up—neutral, or rotating hand position. Pull-ups are used by some organizations as a component of fitness tests, and as a conditioning activity for some sports.',
                    imageSrc: 'https://www.inspireusafoundation.org/wp-content/uploads/2022/11/pull-up-variations.jpg',
                    requiredEquipment: 'horizontal bar',
                    muscleGroup: ['back', 'biceps'],
                },
                {
                    name: 'Push up',
                    description: 'The push-up (sometimes called a press-up in British English) is a common calisthenics exercise beginning from the prone position. By raising and lowering the body using the arms, push-ups exercise the pectoral muscles, triceps, and anterior deltoids, with ancillary benefits to the rest of the deltoids, serratus anterior, coracobrachialis and the midsection as a whole.[1] Push-ups are a basic exercise used in civilian athletic training or physical education and commonly in military physical training. They are also a common form of punishment used in the military, school sport, and some martial arts disciplines.',
                    imageSrc: 'https://www.fitnesseducation.edu.au/wp-content/uploads/2020/10/Pushups.jpg',
                    requiredEquipment: 'body only',
                    muscleGroup: ['shoulders'],
                },
                {
                    name: 'Bench press',
                    description: 'The bench press, or chest press, is a weight training exercise where the trainee presses a weight upwards while lying on a weight training bench. Although the bench press is a full-body exercise, the muscles primarily used are the pectoralis major, the anterior deltoids, and the triceps, among other stabilizing muscles. A barbell is generally used to hold the weight, but a pair of dumbbells can also be used.[1] The barbell bench press is one of three lifts in the sport of powerlifting alongside the deadlift and squat and is the only lift in the sport of Paralympic powerlifting. The bench press is an upper body mass-building exercise that stresses some of the body’s largest muscles, including chest, triceps, shoulders, front deltoids, and even upper back.[2] It is also used extensively in weight training, bodybuilding, and other types of training to develop the chest muscles. Bench press strength is important in combat sports as it tightly correlates to punching power. To improve upper body strength, power, and endurance for athletic, occupational, and functional performance as well as muscle development, the barbell bench press is frequently used. [3]',
                    imageSrc: 'https://cdn.muscleandstrength.com/sites/default/files/barbell-bench-press_0.jpg',
                    requiredEquipment: 'kettlebells',
                    muscleGroup: ['legs', 'chest' ],
                },
                {
                    name: 'Dead lift',
                    description: 'The deadlift is a weight training exercise in which a loaded barbell or bar is lifted off the ground to the level of the hips, torso perpendicular to the floor, before being placed back on the ground. It is one of the three powerlifting exercises, along with the squat and bench press. Deadlift phases Phase 1 Phase 1 Phase 2 Phase 2 Phase 3 Phase 3 Two styles of deadlift are commonly used in competition settings: the sumo deadlift and the standard deadlift. While both of these styles are permitted under the rules of powerlifting competition, only the conventional stance is used in strongman deadlifting contests.',
                    imageSrc: 'https://www.shape.com/thmb/TDOFpB64QaVjoBWz82A7c7vomT4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Guide-to-Deadlifts-GettyImages-1368073669-9492fe76328041169af7baf93afe1bc5.jpg',
                    requiredEquipment: 'bands',
                    muscleGroup: ['legs', 'triceps'],
                }
            ]
            resolve(exercises);
        }, 1000)
    })
}

export const getRatedExercises = () => {
    return new Promise<IRatedExercise[]>((resolve, reject) => {
        setTimeout(() => {
            const exercises: IRatedExercise[] = [
                {
                    name: 'Pull up',
                    description: 'A pull-up is an upper-body strength exercise. The pull-up is a closed-chain movement where the body is suspended by the hands, gripping a bar or other implement at a distance typically wider than shoulder-width, and pulled up. As this happens, the elbows flex and the shoulders adduct and extend to bring the elbows to the torso. Pull-ups build up several muscles of the upper body, including the latissimus dorsi, trapezius, and biceps brachii. A pull-up may be performed with overhand (pronated), underhand (supinated)—sometimes referred to as a chin-up—neutral, or rotating hand position. Pull-ups are used by some organizations as a component of fitness tests, and as a conditioning activity for some sports.',
                    imageSrc: 'https://www.inspireusafoundation.org/wp-content/uploads/2022/11/pull-up-variations.jpg',
                    requiredEquipment: 'horizontal bar',
                    muscleGroup: ['back', 'biceps'],
                    rating: 7.4
                },
                {
                    name: 'Push up',
                    description: 'The push-up (sometimes called a press-up in British English) is a common calisthenics exercise beginning from the prone position. By raising and lowering the body using the arms, push-ups exercise the pectoral muscles, triceps, and anterior deltoids, with ancillary benefits to the rest of the deltoids, serratus anterior, coracobrachialis and the midsection as a whole.[1] Push-ups are a basic exercise used in civilian athletic training or physical education and commonly in military physical training. They are also a common form of punishment used in the military, school sport, and some martial arts disciplines.',
                    imageSrc: 'https://www.fitnesseducation.edu.au/wp-content/uploads/2020/10/Pushups.jpg',
                    requiredEquipment: 'body only',
                    muscleGroup: ['shoulders'],
                    rating: 8.6,
                },
                {
                    name: 'Bench press',
                    description: 'The bench press, or chest press, is a weight training exercise where the trainee presses a weight upwards while lying on a weight training bench. Although the bench press is a full-body exercise, the muscles primarily used are the pectoralis major, the anterior deltoids, and the triceps, among other stabilizing muscles. A barbell is generally used to hold the weight, but a pair of dumbbells can also be used.[1] The barbell bench press is one of three lifts in the sport of powerlifting alongside the deadlift and squat and is the only lift in the sport of Paralympic powerlifting. The bench press is an upper body mass-building exercise that stresses some of the body’s largest muscles, including chest, triceps, shoulders, front deltoids, and even upper back.[2] It is also used extensively in weight training, bodybuilding, and other types of training to develop the chest muscles. Bench press strength is important in combat sports as it tightly correlates to punching power. To improve upper body strength, power, and endurance for athletic, occupational, and functional performance as well as muscle development, the barbell bench press is frequently used. [3]',
                    imageSrc: 'https://cdn.muscleandstrength.com/sites/default/files/barbell-bench-press_0.jpg',
                    requiredEquipment: 'kettlebells',
                    muscleGroup: ['legs', 'chest' ],
                    rating: 8.5,
                },
                {
                    name: 'Dead lift',
                    description: 'The deadlift is a weight training exercise in which a loaded barbell or bar is lifted off the ground to the level of the hips, torso perpendicular to the floor, before being placed back on the ground. It is one of the three powerlifting exercises, along with the squat and bench press. Deadlift phases Phase 1 Phase 1 Phase 2 Phase 2 Phase 3 Phase 3 Two styles of deadlift are commonly used in competition settings: the sumo deadlift and the standard deadlift. While both of these styles are permitted under the rules of powerlifting competition, only the conventional stance is used in strongman deadlifting contests.',
                    imageSrc: 'https://www.shape.com/thmb/TDOFpB64QaVjoBWz82A7c7vomT4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Guide-to-Deadlifts-GettyImages-1368073669-9492fe76328041169af7baf93afe1bc5.jpg',
                    requiredEquipment: 'bands',
                    muscleGroup: ['legs', 'triceps'],
                    rating: 9.2,
                }
            ]
            resolve(exercises);
        }, 1000)
    })
}
const isFitsByMuscleGroup = (exercise: IExercise, chosenMuscleGroups: IFilter) => {
    if (chosenMuscleGroups === undefined ||chosenMuscleGroups.values.length === 0 ) {
        return true;
    }
    return exercise.muscleGroup.some(muscleGroup => chosenMuscleGroups.values.includes(muscleGroup));
}
const isFitsByEquipment = (exercise: IExercise, chosenEquipment: IFilter) => {
    if (chosenEquipment === undefined || chosenEquipment.values.length === 0) {
        return true;
    }
    return chosenEquipment.values.includes(exercise.requiredEquipment);
}

export const filterExercises = async (chosenFilters: IFilter[], params: IFilterParams) => {
    try {
        const exercises = params.rated? await getRatedExercises(): await getExercises();
        const muscleGroupFilters = chosenFilters.find(filter => filter.filterGroup === 'Muscle group');
        const equipmentFilters = chosenFilters.find(filter => filter.filterGroup === 'Equipment');
        return exercises.filter((exercise) => {
            return isFitsByEquipment(exercise, equipmentFilters as IFilter) && isFitsByMuscleGroup(exercise, muscleGroupFilters as IFilter)
        })
    } catch (err){
        console.error(err);
    }
}

export const sortExercisesByRating = (exercises: IRatedExercise[]): IRatedExercise[] => {
    return exercises.sort((a,b) => {
        if (a.rating < b.rating) {
            return 1;
        }
        if (a.rating > b.rating) {
            return  -1
        }
        return 0;
    })
}