import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/dashboard';
import WaitingRoom from './components/waitingRoom';
import BirthCake from './components/birthCake';
import BirthdayWish from './components/birthdayWish';
import './App.css'


function App() {


  return (
    <>

      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/waiting' element={<WaitingRoom/>} />
        <Route path='/birth_cake' element={<BirthCake/>} />
        <Route path='wish_msg' element={<BirthdayWish/>} />
      </Routes>

    </>
  )
}

export default App
