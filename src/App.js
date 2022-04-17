
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home/Home';
import Login from './pages/Login/Login';
import Footer from './pages/sharedComponent/Footer/Footer';
import Header from './pages/sharedComponent/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
