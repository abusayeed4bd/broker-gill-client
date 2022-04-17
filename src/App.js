
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './pages/Blog/Blog';
import Home from './pages/home/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Footer from './pages/sharedComponent/Footer/Footer';
import Header from './pages/sharedComponent/Header/Header';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
