
import './App.css';
import { useState } from 'react';
import Navbar from './common/Navbar';
import Layout from './pages/Layout';
import {Routes,Route} from 'react-router-dom'
import Profile from './pages/Profile';
import Footer from './common/Footer';
import Dashboard from './pages/Dashboard';
import Explore from './pages/Explore';
import Register from './pages/Register';
import PrivateComponent from './common/PrivateComponent';
import Login from './pages/Login';
import Navbar2 from './common/Navbar2';
function App() {
  const [ user, setLoginUser] = useState({})
  return (
    <div className="App">
      
      <Navbar2/>
      <Routes>
        
        <Route path="/" element={<Layout/>}/>
        <Route element={<PrivateComponent/>}>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/explore" element={<Explore/>}/>
        </Route>
        <Route path="/signup" element={<Register/>}/>
        <Route path="/login" element={<Login setLoginUser={setLoginUser}/>}/>
        
      </Routes>
      
      
      <Footer/>
    </div>
  );
}

export default App;
