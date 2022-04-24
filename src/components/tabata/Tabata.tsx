import { Container } from 'react-bootstrap';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import RunningTimer from './RunningTimer';
import SettingTabata from './SettingTabata';
import end from '../../media/end.wav'

const Tabata = () => {

    const { modeSetting } = useTypeSelector(state => state.tabata);

    
    return (
        <Container fluid='xxl'>
            <div className='tabata'>
                <div className='col-7'>
                    Табата − это тренировка с несколькими интервалами по 20 и 10 секунд.<br />
                    Сначала 20 секунд максимально интенсивной работы и 10 секунд отдыха,<br />
                    такие циклы повторяются 8 раз подряд и составляют в общей сумме 4 минуты.
                </div>
                <div className='col-5'>
                    {modeSetting ? <SettingTabata /> : <RunningTimer />}
                    <audio id='end' preload='auto' src={end}></audio>
                </div>
            </div>

        </Container>
    );
}

export default Tabata;
