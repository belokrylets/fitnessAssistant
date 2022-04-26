import { IPersonalCabinet, PersonalCabinet, PersonalCabinetTypes } from "../types/personalCabinet";

const defaultState: IPersonalCabinet = {
    isLogin: true,
    user: {
        login: 'Sergio',
        password: 'Sergio',
        name: 'Сергей',
        surname: 'Белокрылец',
        weight: '90',
        growth: '182',
        age: '31',
    }
}

export const personalCabinetReduser = (state = defaultState, action: PersonalCabinet): IPersonalCabinet => {
    switch (action.type) {
        case PersonalCabinetTypes.IS_LOGIN:
            return { ...state, isLogin: !state.isLogin };
        case PersonalCabinetTypes.GET_USER_DATA:
            return {...state, user: action.payload}
        default:
            return state;
    }
}