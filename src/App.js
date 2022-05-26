import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Shared/Navbar/Navbar';
import Home from './Pages/Home/Home/Home';
import Blogs from './Pages/Blogs/Blogs';


function App() {
  return (
    <div  style={{background:'#0f172a'}}>
      <Navbar></Navbar>
      <Routes>
         <Route path='/' element={<Home></Home>}></Route> 
         <Route  path='/blogs' element={<Blogs></Blogs>}></Route> 
      </Routes>
    </div>
  );
}

export default App;
