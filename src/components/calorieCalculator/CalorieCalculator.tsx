import { Container } from 'react-bootstrap';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import DataInput from './DataInput';
import Result from './Result';

const CalorieCalculator = () => {

    const { mode } = useTypeSelector(state => state.calorieCalculator)

    return (
        <Container fluid="xxl">
            {(mode === 'input') ? <DataInput /> : <Result />}
        </Container>
    );
}

export default CalorieCalculator;

