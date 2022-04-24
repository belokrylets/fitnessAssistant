import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navbars = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Container fluid="xxl">
          <Navbar.Brand>
            <Link className='navbar-brand' to='/' >Фитнес помощник</Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link className='nav-link' to='exerciseGuide'>Справочник упражнений</Link>
            <Link className='nav-link' to="calorieCalculator">Калькулятор калорий</Link>
            <Link className='nav-link' to="tabata">Табата</Link>
            <Link className='nav-link' to="vitamins">Совместимость витаминов</Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}

export default Navbars;