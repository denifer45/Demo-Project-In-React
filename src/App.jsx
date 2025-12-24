import React from 'react'
import Header from './Components/Header';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Users from './Components/Users';


const App = ()=>{
   return(
    <div>
{/* <Header/> */}
{/*Navigation Bar Component*/}
<nav>
    <Link to="/">Home</Link>|{""}
    <Link to="/About">About</Link>|{""}
    <Link to="/Users">Users</Link>
</nav>
{/*Routes*/}
<Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/Users' element={<Users/>}/>    
</Routes>

    </div>
   )
}

export default App;