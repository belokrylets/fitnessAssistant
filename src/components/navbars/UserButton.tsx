import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const UserButton = () => {
    const navigate = useNavigate()
    return (
   
            <Button onClick={() => navigate('personalCabinet')} variant="outline-light" style={{ border: 'none' }} >
            Сергей Белокрылец</Button>
     
        
    );
}

export default UserButton;