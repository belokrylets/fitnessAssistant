import { IPersonalCabinet, PersonalCabinet, PersonalCabinetTypes } from "../types/personalCabinet";

const defaultState: IPersonalCabinet = {
    isLogin: true,
    modeCabinet: 'profile',
    user: {
        login: 'Sergio',
        password: 'Sergio',
        name: 'Сергей',
        surname: 'Белокрылец',
        weight: '90',
        growth: '182',
        age: '31',
        waist: '89',
        hips: '94',
        breast: '103',
        shoulders: '120',
        biceps: '37',
        caviar: '40',
        hip: '55',
        forearm: '25',
    }
}

export const personalCabinetReduser = (state = defaultState, action: PersonalCabinet): IPersonalCabinet => {
    switch (action.type) {
        case PersonalCabinetTypes.IS_LOGIN:
            return { ...state, isLogin: !state.isLogin };
        case PersonalCabinetTypes.GET_USER_DATA:
            return { ...state, user: action.payload };
        case PersonalCabinetTypes.CHANGE_MODE_CABINET:
            return { ...state, modeCabinet: action.payload };
        case PersonalCabinetTypes.CHANGE_WEIGHT:
            return { ...state, user: { ...state.user, weight: action.payload } }
        default:
            return state;
    }
}