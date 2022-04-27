import classnames from 'classnames';
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
        <div className='runningTimer'>
            <div>
                <div>
                    <p>{roundTimer > 10 ? `Работаем` : `Отдых`}</p>
                </div>
                <div className={classnames('timer', {
                    redTimer: roundTimer > 10,
                    greenTimer: roundTimer <= 10,
                })}>

                    <div>
                        0:{roundTimer < 10 ? 0 : null}{roundTimer}
                    </div>
                </div>
            </div>
            <div className='roundsLeft'>
                <div>
                    <p>Раундов осталось</p>
                </div>
                <div className='rounds'>

                    <div>
                        {round}
                    </div>
                </div>
            </div>
        </div>

    )

    const renderFinish = () => (
        <div>
            Тренеровка закончена!
        </div>
    )

    return (
        <div className='tabata'>
            <div>
                {round > 0 ? renderRun() : renderFinish()}
                <Button variant="dark" className='mt-3' onClick={handleButton}>Завершить</Button>

            </div>
        </div>

    );
}

export default RunningTimer;