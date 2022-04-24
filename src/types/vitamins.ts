export interface IVitamins {
    vitamin1: string;
    vitamin2: string;
    compatibility: null | string;
}

export enum VitaminsTypes {
    SELECT_VIT1 = 'SELECT_VIT1',
    SELECT_VIT2 = 'SELECT_VIT2',
    COMPATIBILITY = 'COMPATIBILITY',
}

interface SelectVit1_Action {
    type: VitaminsTypes.SELECT_VIT1,
    payload: { value: string }
}

interface SelectVit2_Action {
    type: VitaminsTypes.SELECT_VIT2,
    payload: { value: string }
}

interface СompatibilityAction {
    type: VitaminsTypes.COMPATIBILITY,
    payload: string
}

export type Vitamins = SelectVit1_Action | SelectVit2_Action | СompatibilityAction;