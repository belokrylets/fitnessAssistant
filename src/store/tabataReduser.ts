
import { ITabata, Tabata, TabataTypes } from "../types/tabata";

const defaultState: ITabata = {
    roundTimer: 30,
    round: 8,
    modeSetting: true,
}

export const tabataReduser = (state = defaultState, action: Tabata): ITabata => {
    switch (action.type) {
        case TabataTypes.ROUND_TIMER:
            return { ...state, roundTimer: action.payload };
        case TabataTypes.RESET_ROUND_TIMER:
            return {...state, roundTimer: action.payload}
        case TabataTypes.DEFAULT_STATE_TIMER:
            return defaultState;
        case TabataTypes.MODE_SETTING_CHANGE:
            return {...state, modeSetting: !state.modeSetting}
        case TabataTypes.ROUND_CHANGE:
            return { ...state, round: action.payload };
        default:
            return state;
    }
}

export default tabataReduser;