
export interface IResult {
    calories: string;
    proteins: number;
    carbohydrates: number;
    fats: number;
}
export interface ICalorieCalculator {
    mode: string;
    target: string;
    activity: string;
    gender: string;
    weight: string;
    growth: string;
    age: string;
    result: IResult;
}

export enum CalorieCalculatorTypes {
    RESULT_SHOW = 'RESULT_SHOW',
    DATA_INPUT_MODE = 'DATA_INPUT_MODE',
    INPUT_DATA = 'INPUT_DATA',
    GETTING_THE_RESULT = 'GETTING_THE_RESULT',
}
 
interface dataInputModeAction {
    type: CalorieCalculatorTypes.DATA_INPUT_MODE,
    payload: string
 }

 interface resultShowAction {
    type: CalorieCalculatorTypes.RESULT_SHOW,
    payload: string
 }

 interface inputDataAction {
    type: CalorieCalculatorTypes.INPUT_DATA,
    payload: {name: string, value: string}
 }



 interface gettingResultAction {
    type: CalorieCalculatorTypes.GETTING_THE_RESULT,
    payload: IResult
 }

 export type CalorieCalculator = dataInputModeAction | resultShowAction | inputDataAction | gettingResultAction;