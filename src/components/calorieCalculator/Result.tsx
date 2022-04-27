import { Table, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useTypeSelector } from "../../hooks/useTypeSelector";
import { CalorieCalculatorTypes } from "../../types/calorieCalculator";

const Result = () => {

    const dispatch = useDispatch();

    const { result } = useTypeSelector(state => state.calorieCalculator)

    const calculateAgain = (event: any) => {
        event.preventDefault();
        dispatch({
            type: CalorieCalculatorTypes.DATA_INPUT_MODE
        })
    }
    return (
        <div className='calorieCalculator'>
            <div>
                <p>Для достижения вашей цели суточная калорийность должна составлять {result.calories} ккал в день. </p>
                <Table striped bordered hover>
                    <tbody>
                        <tr>
                            <td>Белки</td>
                            <td>{result.proteins}</td>
                        </tr>
                        <tr>
                            <td>Углеводы</td>
                            <td>{result.carbohydrates}</td>
                        </tr>
                        <tr>
                            <td>Жиры</td>
                            <td>{result.fats}</td>
                        </tr>

                    </tbody>
                </Table>
                <Button variant="dark" onClick={calculateAgain} type="submit">
                    Рассчитать заново
                </Button>
            </div>

        </div>
    )
}

export default Result;