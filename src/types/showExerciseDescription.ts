export interface IExercise {
    id?: number;
    name: string;
    description: string;
    img: string;
}
export interface IShowExerciseDescription {
    showExerciseDescription: boolean;
    exercise: IExercise;
    place: string;
}

export enum ShowExerciseDescriptionTypes {
    SHOW_DESCRIPTION = 'SHOW_DESCRIPTION',
    CHANGE_EXERCISE = 'CHANGE_EXERCISE',
    RESET_EXERCISE = 'RESET_EXERCISE0',
    CHANGE_PLACE = 'CHANGE_PLACE',
}

interface ShowExerciseDescriptionAction {
    type: ShowExerciseDescriptionTypes.SHOW_DESCRIPTION,
}

interface ChangeExerciseAction {
    type: ShowExerciseDescriptionTypes.CHANGE_EXERCISE,
    payload: IExercise
}

interface ResetExerciseAction {
    type: ShowExerciseDescriptionTypes.RESET_EXERCISE,
}
interface ChangePlaceAction {
    type: ShowExerciseDescriptionTypes.CHANGE_PLACE,
    payload: string;
}

export type ShowExerciseDescription = ShowExerciseDescriptionAction | ChangeExerciseAction | ResetExerciseAction | ChangePlaceAction;