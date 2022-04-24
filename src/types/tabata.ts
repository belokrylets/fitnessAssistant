import { Interface } from "readline";

export interface ITabata {
    roundTimer: number;
    round: number;
    modeSetting: boolean;
}

export enum TabataTypes {
    ROUND_TIMER = 'ROUND_TIMER',
    RESET_ROUND_TIMER = 'RESET_ROUND_TIMER',
    DEFAULT_STATE_TIMER = 'DEFAULT_STATE_TIMER',
    ROUND_CHANGE = 'ROUND_CHANGE',
    MODE_SETTING_CHANGE = 'MODE_SETTING_CHANGE'
}

interface resetRoundTimerAction {
    type: TabataTypes.RESET_ROUND_TIMER,
    payload: number;
}

interface roundTimerAction {
    type: TabataTypes.ROUND_TIMER,
    payload: number,
}

interface defaultStateTimerAction {
    type: TabataTypes.DEFAULT_STATE_TIMER,
}

interface roundChangeAction {
    type: TabataTypes.ROUND_CHANGE,
    payload: number,
}

interface modeSettingAction {
    type: TabataTypes.MODE_SETTING_CHANGE,
}

export type Tabata = roundChangeAction | defaultStateTimerAction | roundTimerAction | resetRoundTimerAction | modeSettingAction;