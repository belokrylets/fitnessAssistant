import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { TabataTypes } from '../../types/tabata';

const RunningTimer = () => {
    const dispatch = useDispatch();
    const { roundTimer, round } = useTypeSelector(state => state.tabata);
    const handleButton = () => {
        dispatch({
            type: TabataTypes.DEFAULT_STATE_TIMER
        })
    }

    const renderRun = () => (
        <div>
            <p>{roundTimer}  {roundTimer > 10 ? `работаем` : `отдых`}</p>
            <p>Осталось {round} раундов</p>
        </div>
    )

    const renderFinish = () => (
        <div>
            Тренеровка закончена!
        </div>
    )

    return (
        <div>
            {round > 0 ? renderRun() : renderFinish()}
            <Button className='mt-3' onClick={handleButton}>Начать заново</Button>

        </div>
    );
}

export default RunningTimer;