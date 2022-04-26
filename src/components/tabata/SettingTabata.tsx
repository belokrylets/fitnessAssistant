import { Button, ButtonGroup } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { TabataTypes } from '../../types/tabata';

const SettingTabata = () => {

    const dispatch = useDispatch();

    const { roundTimer, round } = useTypeSelector(state => state.tabata);

    const handlerStart = () => {
        dispatch({
            type: TabataTypes.MODE_SETTING_CHANGE
        })
        let currentRoundTimer = roundTimer
        let currentRound = round

        const timer = setInterval(() => {

            const i = currentRoundTimer - 1
            currentRoundTimer = i

            dispatch({
                type: TabataTypes.ROUND_TIMER,
                payload: currentRoundTimer,
            })
            if (currentRoundTimer <= 0) {
                currentRoundTimer = roundTimer
                currentRound -= 1
                dispatch({
                    type: TabataTypes.RESET_ROUND_TIMER,
                    payload: currentRoundTimer
                })
                dispatch({
                    type: TabataTypes.ROUND_CHANGE,
                    payload: currentRound
                })
            }
            if (currentRound < 1) {
                clearInterval(timer)
            }
        }, 1000)
    }

    const incrementRound = () => {
        dispatch({
            type: TabataTypes.ROUND_CHANGE,
            payload: round + 1,
        })
    }

    const decrementRound = () => {
        dispatch({
            type: TabataTypes.ROUND_CHANGE,
            payload: round - 1,
        })
    }


    return (
        <div className='tabata'>
            <div className='col-7'>
                Табата − это тренировка с несколькими интервалами по 20 и 10 секунд.<br />
                Сначала 20 секунд максимально интенсивной работы и 10 секунд отдыха,<br />
                такие циклы повторяются 8 раз подряд и составляют в общей сумме 4 минуты.
            </div>
            <div>
                <div>
                    <h5>Настройка таймера</h5>
                    <div  className='settingTimer'>
                        <div className='settingRounds mb-2'>
                            {round}
                        </div>
                        <div>
                            <ButtonGroup>
                                <Button disabled={round <= 1} onClick={decrementRound} variant="secondary">- раунд</Button>
                                <Button onClick={incrementRound} variant="secondary">+ раунд</Button>
                            </ButtonGroup>
                        </div>
                        <Button variant="dark" className='mt-3' onClick={() => handlerStart()}>Начать тренировку</Button>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default SettingTabata;