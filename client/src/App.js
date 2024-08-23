import './App.css';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import TvShow from './pages/TvShow';
import Player from './pages/Player';
import MoviePage from './pages/MoviePage';
import Netflix from './pages/Netflix';
import BackgroundImage from './components/BackgroundImage';
import Header from './components/Header';

import {BrowserRouter , Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/login' element={<LoginPage/>}></Route>
      <Route exact path='/signup' element={<SignUpPage/>}></Route>
      <Route exact path='/player' element={<Player/>}></Route>
      <Route exact path='/tv' element={<TvShow/>}></Route>
      <Route exact path='/' element={<SignUpPage/>}></Route>
      <Route exact path='/movie' element={<MoviePage/>}></Route>
      
    </Routes>
    {/* <Header /> */}
    </BrowserRouter> 
  );
}

export default App;
