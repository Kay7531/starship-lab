import logo from './logo.svg';
import './App.css';

import NavBar from './components/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import StarshipList from './components/StarshipList/StarshipList';
import StarshipPage from './components/StarshipPage/StarshipPage';

function App() {
  return (
   <>
   <NavBar/>
   <Routes>
    <Route path="/starship-list" element={<StarshipList/>}/>
    <Route path="/starship" element={<StarshipPage/>}/>
   </Routes>
   </>
  );
}

export default App;
