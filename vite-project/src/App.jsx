import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/dashboard';
import WaitingRoom from './components/waitingRoom';
import BirthCake from './components/birthCake';
import BirthdayWish from './components/birthdayWish';
import Navbar from './components/navbar';
import Menu from './components/menu';
import OpenWhen from './components/openWhen';
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
      </Routes>
      <Menu/>
    </>
  )
}

export default App
