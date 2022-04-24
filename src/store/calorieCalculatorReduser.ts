import { ICalorieCalculator, CalorieCalculator, CalorieCalculatorTypes } from "../types/calorieCalculator";

const defaultState: ICalorieCalculator = {
    mode: "input",
    target: "gain",
    activity: "passive",
    gender: "male",
    weight: "",
    growth: "",
    age: "",
    result: {
        calories: '',
        proteins: 0,
        carbohydrates: 0,
        fats: 0,
    }
}

export const calorieCalculatorReduser = (state = defaultState, action: CalorieCalculator): ICalorieCalculator => {
    switch (action.type) {
        case CalorieCalculatorTypes.RESULT_SHOW:
            return { ...state, mode: 'result' };
        case CalorieCalculatorTypes.DATA_INPUT_MODE:
            return defaultState;
        case CalorieCalculatorTypes.INPUT_DATA:
            return {...state, [action.payload.name]: action.payload.value};
case CalorieCalculatorTypes.GETTING_THE_RESULT:
    return {...state, result: action.payload}


        default:
            return state;
    }
}