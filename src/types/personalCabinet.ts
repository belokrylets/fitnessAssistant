interface IUser {
    login: string;
    password: string;
    name: string;
    surname: string;
    weight: string;
    growth: string;
    age: string;
}
export interface IPersonalCabinet {
    isLogin: boolean;
    user: IUser;
}

export enum PersonalCabinetTypes {
    IS_LOGIN = 'IS_LOGIN',
    GET_USER_DATA = 'GET_USER_DATA',
}

interface isLoginAction {
    type: PersonalCabinetTypes.IS_LOGIN,
}

interface getUserDataAction {
    type: PersonalCabinetTypes.GET_USER_DATA,
    payload: IUser,
}

export type PersonalCabinet = isLoginAction | getUserDataAction;
