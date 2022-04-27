import { Form, FloatingLabel, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import calculatoralories from "../../calculations/calculatoralories";
import { useTypeSelector } from "../../hooks/useTypeSelector";
import { CalorieCalculatorTypes } from "../../types/calorieCalculator";

const DataInput = () => {

    const dispatch = useDispatch();
    const { target, activity, gender, weight, growth, age } = useTypeSelector(state => state.calorieCalculator)

    const getResult = (event: any) => {
        event.preventDefault();
        const result = calculatoralories(target, activity, gender, Number(weight), Number(growth), Number(age))
        dispatch({
            type: CalorieCalculatorTypes.GETTING_THE_RESULT,
            payload: result,
        })
        dispatch({
            type: CalorieCalculatorTypes.RESULT_SHOW
        })

    }

    const handleForm = (event: any) => {
        event.preventDefault();
        dispatch({
            type: CalorieCalculatorTypes.INPUT_DATA,
            payload: { name: event.target.name, value: event.target.value }
        })
    }

    return (
        <div className='calorieCalculator'>
            <div className='col-7'>
                Не важно какую цель вы поставили перед собой, похудеть, сохранить вес или набрать массу.<br />
                Без правильного питания тренировки практически бесполезны. <br />
                Залог правильного питания это правильные пропорции калорий, белков жиров и углеводов.<br />
                Раздел 'Калькулятор калорий' поможет рассчитать вашу суточную дозу КБЖУ.
            </div>
            <div className='col-5'>
                <Form onSubmit={getResult} >
                    <FloatingLabel controlId="floatingSelect" label="Выбор цели">
                        <Form.Select name='target' className='mb-3' aria-label="Default select example" onChange={handleForm} >
                            <option value='gain'>Набор массы</option>
                            <option value='loss'>Похудение</option>
                            <option value='safe'>Сохранение массы</option>
                        </Form.Select>
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingSelect" label="Выбор активности">
                        <Form.Select name='activity' className='mb-3' aria-label="Default select example" onChange={handleForm}>
                            <option value='passive'>Сидячий образ жизни, сидячая работа, очень мало или отсутствие спортивных занятий</option>
                            <option value='light'>Легкая активность (немного дневной активности + легкие упражнения 1-3 раза в неделю)</option>
                            <option value='average'>Средняя активность (тренировки 3-5 раз в неделю)</option>
                            <option value='high'>Высокая активность (активный образ жизни и тяжелые тренировки 6-7 раз в неделю)</option>
                            <option value='extreme'>Экстремально-высокая активность (спортивный образ жизни, физический труд, ежедневные тренировки и тд)</option>
                        </Form.Select>
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingSelect" label="Выбор пола">
                        <Form.Select name='gender' className='mb-3' aria-label="Default select example" onChange={handleForm}>
                            <option value='male'>Мужчина</option>
                            <option value='female'>Женщина</option>
                        </Form.Select>
                    </FloatingLabel>

                    <FloatingLabel className='mb-3' label="Введите вес (кг)">
                        <Form.Control type="number" name='weight' placeholder="Введите вес (кг)" onChange={handleForm} />
                    </FloatingLabel>

                    <FloatingLabel className='mb-3' label="Введите рост (см)">
                        <Form.Control className='mb-3' type="number" name='growth' placeholder="Введите рост (см)" onChange={handleForm} />
                    </FloatingLabel>

                    <FloatingLabel className='mb-3' label="Введите возраст">
                        <Form.Control className='mb-3' type="number" name='age' placeholder="Введите возраст" onChange={handleForm} />
                    </FloatingLabel>



                    <Button variant="dark" type="submit" disabled={(!target || !activity || !gender || !weight || !growth || !age)}>
                        Рассчитать
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default DataInput;