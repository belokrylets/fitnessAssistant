interface IUser {
    login: string;
    password: string;
    name: string;
    surname: string;
    weight: string;
    growth: string;
    age: string;
    waist: string;
    hips: string;
    breast: string;
    shoulders: string;
    biceps: string;
    caviar: string;
    hip: string;
    forearm: string;
}
export interface IPersonalCabinet {
    isLogin: boolean;
    modeCabinet: string;
    user: IUser;
}

export enum PersonalCabinetTypes {
    IS_LOGIN = 'IS_LOGIN',
    GET_USER_DATA = 'GET_USER_DATA',
    CHANGE_MODE_CABINET = 'CHANGE_MODE_CABINET',
    CHANGE_WEIGHT = 'CHANGE_WEIGHT',
}

interface isLoginAction {
    type: PersonalCabinetTypes.IS_LOGIN,
}

interface getUserDataAction {
    type: PersonalCabinetTypes.GET_USER_DATA,
    payload: IUser,
}

interface modeCabinetAction {
    type: PersonalCabinetTypes.CHANGE_MODE_CABINET,
    payload: string,
}

interface changeWeightAction {
    type: PersonalCabinetTypes.CHANGE_WEIGHT,
    payload: string,
}

export type PersonalCabinet = isLoginAction | getUserDataAction | modeCabinetAction | changeWeightAction;
