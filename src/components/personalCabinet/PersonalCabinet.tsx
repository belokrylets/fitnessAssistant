import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PersonalCabinetTypes } from "../../types/personalCabinet";

const PersonalCabinet = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const buttonSignOut = () => {
        navigate('/')
        dispatch({
            type: PersonalCabinetTypes.IS_LOGIN
        })
    }
    return (
        <div>
            Личный кбинет пользователя
            <Button onClick={buttonSignOut} variant="dark">Выход</Button>
        </div>
        
    );
}

export default PersonalCabinet;