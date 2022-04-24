import { IVitamins, Vitamins, VitaminsTypes } from "../types/vitamins";

const defaultState: IVitamins = {
    vitamin1: 'A',
    vitamin2: 'A',
    compatibility: null,
}

export const vitaminReduser = (state = defaultState, action: Vitamins): IVitamins => {
    switch (action.type) {
        case VitaminsTypes.SELECT_VIT1:
            return { ...state, vitamin1: action.payload.value };
        case VitaminsTypes.SELECT_VIT2:
            return { ...state, vitamin2: action.payload.value };
        case VitaminsTypes.COMPATIBILITY:
            return { ...state, compatibility: action.payload };
        default:
            return state;
    }
}