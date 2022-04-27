import { SetStateAction, useState } from "react";
import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useTypeSelector } from "../../hooks/useTypeSelector";
import { PersonalCabinetTypes } from "../../types/personalCabinet";

const Anthropometric = () => {
    const dispatch = useDispatch();
    const { weight, growth } = useTypeSelector(state => state.personalCabinet.user);
    const [show, setShow] = useState(false);
    const [newWeigh, setNewWeigh] = useState('');

    const handleNewWeigh = (e: { target: { value: SetStateAction<string>; }; }) => {
        setNewWeigh(e.target.value);
    };
    const buttonWeighYourself = () => {
        setShow(!show)
    };

    const buttonSave = () => {
        setShow(!show);
        dispatch({
            type: PersonalCabinetTypes.CHANGE_WEIGHT,
            payload: newWeigh,
        })
    };
    return (
        <div>
            <h5>Антропометрические данные</h5>
            <p>
                Вес: {weight}кг<br />
                Рост: {growth}см
            </p>
            <Button onClick={buttonWeighYourself} variant="outline-dark">Взвеситься</Button>

            <Modal
                onHide={buttonWeighYourself}
                show={show}
                size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                centered>

                <Modal.Body>
                    <FloatingLabel className='mb-3' label="Введите вес (кг)">
                        <Form.Control onChange={handleNewWeigh} type="number" name='weight' placeholder="Введите вес (кг)" />
                    </FloatingLabel>
                </Modal.Body>
                <Modal.Footer>
                    <Button disabled={!newWeigh} variant="dark" onClick={buttonSave} >Сохранить</Button>
                </Modal.Footer>
            </Modal>

        </div>
    );
}

export default Anthropometric;