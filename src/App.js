import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Shared/Navbar/Navbar';
import Home from './Pages/Home/Home/Home';
import Blogs from './Pages/Blogs/Blogs';
import Login from './Pages/Login/Login/Login';
import Signup from './Pages/Login/Signup/Signup';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from './Pages/Login/RequireAuth';
import Purchase from './Pages/Purchase/Purchase';


function App() {
  return (
    <div   class='bg-slate-900'>
      <Navbar></Navbar>
      <Routes>
         <Route path='/' element={<Home></Home>}></Route> 
         <Route  path='/blogs' element={<Blogs></Blogs>}></Route> 
         <Route  path='/login' element={<Login></Login>}></Route> 
         <Route  path='/signup' element={<Signup></Signup>}></Route> 
         <Route  path='/signup' element={
           <RequireAuth>
             <Purchase></Purchase>
            </RequireAuth>
         }></Route> 

      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
