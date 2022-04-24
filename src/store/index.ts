import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { calorieCalculatorReduser } from './calorieCalculatorReduser'
import { showExerciseDescriptionReduser } from './showExerciseDescriptionReduser'
import tabataReduser from './tabataReduser'
import { vitaminReduser } from './vitaminsReduser'

const rootReduser = combineReducers({
vitamins: vitaminReduser,
calorieCalculator: calorieCalculatorReduser,
tabata: tabataReduser,
showExerciseDescription: showExerciseDescriptionReduser,
})

export const store = createStore(rootReduser, composeWithDevTools(applyMiddleware(thunk)))
export type RootState = ReturnType<typeof rootReduser>