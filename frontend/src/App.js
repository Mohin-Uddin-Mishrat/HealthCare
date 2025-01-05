import logo from './logo.svg';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Doctor } from './pages/Doctor';
import { ProtectedRout } from './components/ProtectedRout';
import { Profile } from './pages/Profile';
import { useDispatch } from 'react-redux';
import { logout } from './redux/authSlice';

function LogOut(){
  const dispatch = useDispatch()
  dispatch(logout())
  localStorage.clear()
  return <Navigate to='/login'></Navigate>
}
function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/doctor/:id' element={<Doctor></Doctor>}></Route>
        <Route path='/logout' element={<LogOut></LogOut>}></Route>
        <Route path='/profile' element={<ProtectedRout><Profile></Profile></ProtectedRout>}></Route>
        <Route path='*' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
