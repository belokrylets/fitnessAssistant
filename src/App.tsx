import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from './components/Navbars';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Vitamins from './components/Vitamins';
import CalorieCalculator from './components/CalorieCalculator';
import Tabata from './components/tabata/Tabata';
import Home from './components/Home';
import ExerciseGuide from './components/exercises/ExerciseGuide';

const App = () => {
  return (
    <Router>
      <Navbars />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="exerciseGuide" element={<ExerciseGuide />} />
        <Route path="calorieCalculator" element={<CalorieCalculator />} />
        <Route path="tabata" element={<Tabata />} />
        <Route path="vitamins" element={<Vitamins />} />
      </Routes>
    </Router>
  );
}

export default App;
