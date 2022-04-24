import { IShowExerciseDescription, ShowExerciseDescription, ShowExerciseDescriptionTypes } from "../types/showExerciseDescription";

const defaultState: IShowExerciseDescription = {
    showExerciseDescription: false,
    exercise: {
        name: '',
        description: '',
        img: '',
    }
}

export const showExerciseDescriptionReduser = (state = defaultState, action: ShowExerciseDescription):IShowExerciseDescription => {
    switch (action.type) {
        case ShowExerciseDescriptionTypes.SHOW_DESCRIPTION:
            return {...state, showExerciseDescription: !state.showExerciseDescription};
        case ShowExerciseDescriptionTypes.CHANGE_EXERCISE:
            return {...state, exercise: action.payload};
        case ShowExerciseDescriptionTypes.RESET_EXERCISE:
            return {...state, exercise: defaultState.exercise}
        default:
            return state;
    }
}