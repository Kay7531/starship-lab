import logo from './logo.svg';
import './App.css';

import NavBar from './components/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import StarshipList from './components/StarshipList/StarshipList';

function App() {
  return (
   <>
   <NavBar/>
   <Routes>
    <Route path="/starship-list" element={<StarshipList/>}/>
   </Routes>
   </>
  );
}

export default App;
