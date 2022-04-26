import { FloatingLabel, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { ShowExerciseDescriptionTypes } from "../../types/showExerciseDescription";


const ExerciseFilter = () => {

    const dispatch = useDispatch();
    const handleFilter = (event:any) => {
dispatch({
    type: ShowExerciseDescriptionTypes.CHANGE_PLACE,
    payload: event.target.value
})
    }

    return (
        <FloatingLabel controlId="floatingSelect" label="Место тренировки" onChange={handleFilter}>
            <Form.Select>
                <option value='all'>Все тренировки</option>
                <option value='gym'>Тренировка в зале</option>
                <option value='home'>Домашняя тренировка</option>
            </Form.Select>
        </FloatingLabel>
    );
}

export default ExerciseFilter;