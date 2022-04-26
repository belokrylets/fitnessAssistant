import { Container } from 'react-bootstrap';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import RunningTimer from './RunningTimer';
import SettingTabata from './SettingTabata';

const Tabata = () => {

    const { modeSetting } = useTypeSelector(state => state.tabata);

    return (
        <Container fluid='xxl'>
            {modeSetting ? <SettingTabata /> : <RunningTimer />}
        </Container>
    );
}

export default Tabata;
