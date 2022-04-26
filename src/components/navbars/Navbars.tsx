import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import ButtonSignIn from './ButtonSignIn';
import UserButton from './UserButton';

const Navbars = () => {

  const { isLogin } = useTypeSelector(state => state.personalCabinet)

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid="xxl">
          <Navbar.Brand>
            <Link className='navbar-brand' to='/' >Фитнес помощник</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarContent" />
          <Navbar.Collapse>
            <Nav className="me-auto">
              <Link className='nav-link' to='exerciseGuide'>Справочник упражнений</Link>
              <Link className='nav-link' to="calorieCalculator">Калькулятор калорий</Link>
              <Link className='nav-link' to="tabata">Табата</Link>
              <Link className='nav-link' to="vitamins">Совместимость витаминов</Link>
            </Nav>
            {isLogin ? <UserButton /> : <ButtonSignIn />}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Navbars;