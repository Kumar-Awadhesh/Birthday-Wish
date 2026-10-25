import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/dashboard';
import WaitingRoom from './components/waitingRoom';
import BirthCake from './components/birthCake';
import BirthdayWish from './components/birthdayWish';
import Navbar from './components/navbar';
import Menu from './components/menu';
import OpenWhen from './components/openWhen';
import BirthdayCake from './components/birthdayCake';
import WaitingHall from './components/waitingHall';
import BirthWishMsg from './components/birthWishMsg';
import './App.css'


function App() {


  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/waiting' element={<WaitingRoom/>} />
        <Route path='/birth_cake' element={<BirthCake/>} />
        <Route path='/wish_msg' element={<BirthdayWish/>} />
        <Route path='/open_when' element={<OpenWhen/>}/>
        <Route path='/birthday_cake' element={<BirthdayCake/>} />
        <Route path='/waiting_hall' element={<WaitingHall/>} />
        <Route path='/birth_wish_msg' element={<BirthWishMsg/>} />
      </Routes>
      <Menu/>
    </>
  )
}

export default App
