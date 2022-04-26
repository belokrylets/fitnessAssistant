import { Button, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { ShowExerciseDescriptionTypes } from '../../types/showExerciseDescription';


const ExerciseDescription = () => {

    const {name, description, img} = useTypeSelector(state => state.showExerciseDescription.exercise)
    const {showExerciseDescription} = useTypeSelector(state => state.showExerciseDescription)

    const dispatch = useDispatch()

    const hideDeccription = () => {
        dispatch({
            type: ShowExerciseDescriptionTypes.RESET_EXERCISE,
        })
        dispatch({
            type: ShowExerciseDescriptionTypes.SHOW_DESCRIPTION,
        })
    }

    return (
        <Modal 
        onHide={hideDeccription}
        show={showExerciseDescription}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered

        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    {description}
                </p>
                <div  className='exerciseImg'>
                <img src={img} />
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={hideDeccription} >Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ExerciseDescription;