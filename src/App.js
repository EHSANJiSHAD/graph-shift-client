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
import NotFound from './Pages/Shared/NotFound/NotFound';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import AddReview from './Pages/Dashboard/AddReview';
import MyProfile from './Pages/Dashboard/MyProfile';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';


function App() {
  return (
    <div   class='bg-slate-900'>
      <Navbar></Navbar>
      <Routes>
         <Route path='/' element={<Home></Home>}></Route> 
         <Route  path='/blogs' element={<Blogs></Blogs>}></Route> 
         <Route  path='/login' element={<Login></Login>}></Route> 
         <Route  path='/signup' element={<Signup></Signup>}></Route> 
         <Route  path='/myPortfolio' element={<MyPortfolio></MyPortfolio>}></Route> 
         <Route  path='/purchase/:id' element={
           <RequireAuth>
             <Purchase></Purchase>
            </RequireAuth>
         }></Route> 
         {/* <Route  path='/addReview' element={
           <RequireAuth>
             <AddReview></AddReview>
            </RequireAuth>
         }></Route>  */}
         <Route  path='/dashboard' element={
           <RequireAuth>
             <Dashboard></Dashboard>
            </RequireAuth>
         }>
           <Route index element={<MyOrders></MyOrders>}></Route>
           <Route path='/dashboard/addReviews' element={<AddReview></AddReview>}></Route>
           <Route path='/dashboard/myProfile' element={<MyProfile></MyProfile>}></Route>
           </Route> 
         <Route  path='*' element={<NotFound></NotFound>}></Route> 
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
