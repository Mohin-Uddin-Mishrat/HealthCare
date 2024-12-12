import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Doctor } from './pages/Doctor';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/doctor' element={<Doctor></Doctor>}></Route>
        <Route path='*' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
