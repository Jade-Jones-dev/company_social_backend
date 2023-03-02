import{BrowserRouter, Route, Routes} from 'react-router-dom';

import Dashboard from '../Dashboard/Dashboard';
import Login from '../Login/Login'
import Home from '../Home/Home'
import Navbar from "../Navbar/Navbar";
import Signup from "../Signup/Signup";

import './App.css';

function App() {
  
  return (
    <div className='wrapper'>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
