import { Button, Container, ListGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTypeSelector } from "../../hooks/useTypeSelector";
import { PersonalCabinetTypes } from "../../types/personalCabinet";
import Anthropometric from "./Anthropometric";
import Profile from "./Profile";
import Program from "./Program";

const PersonalCabinet = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const buttonModeChange = (mode: string) => {
        dispatch({
            type: PersonalCabinetTypes.CHANGE_MODE_CABINET,
            payload: mode,
        })
    }

    const buttonSignOut = () => {
        navigate('/')
        dispatch({
            type: PersonalCabinetTypes.IS_LOGIN
        })
    }

    const { modeCabinet } = useTypeSelector(state => state.personalCabinet);

    const renderCabinet = (modeCbinet: string) => {
        switch (modeCbinet) {
            case 'profile':
                return <Profile />;
            case 'anthropometric':
                return <Anthropometric />;
            case 'program':
                return <Program />;
            case 'progress':
                return <p>Тренировочный прогресс</p>;
            case 'photo':
                return <p>Фото до/после</p>;;
            default:
                throw new Error(`${modeCbinet}: неизвестный режим`);
        }
    }
    return (
        <Container fluid='xxl'>
            <div className="personalCabinet">
                <div className="cabinetMenu">
                    <ListGroup>
                        <button onClick={() => buttonModeChange('profile')} className="list-group-item list-group-item-action">
                            Профиль
                        </button>
                        <button onClick={() => buttonModeChange('anthropometric')} className="list-group-item list-group-item-action">
                            Антропометрические данные
                        </button>
                        <button onClick={() => buttonModeChange('program')} className="list-group-item list-group-item-action">
                            Программа тренировок
                        </button>
                        <button onClick={() => buttonModeChange('progress')} className="list-group-item list-group-item-action">
                            Тренировочный прогресс
                        </button>
                        <button onClick={() => buttonModeChange('photo')} className="list-group-item list-group-item-action">
                            Фото до/после
                        </button>
                        <Button onClick={buttonSignOut} variant="dark">Выход</Button>
                    </ListGroup>
                </div>
                <div  className="col-8">
                    {renderCabinet(modeCabinet)}
                </div>
            </div>
        </Container>


    );
}

export default PersonalCabinet;