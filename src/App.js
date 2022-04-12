import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Booking from './components/Booking/Booking';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import SignUp from './components/Login/SignUp/SignUp';
import Tour from './components/Tour/Tour';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/tour' element={<Tour></Tour>}></Route>
        <Route path='/booking' element={<Booking></Booking>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
