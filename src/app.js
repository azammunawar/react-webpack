import React from "react";
import { Link, BrowserRouter  as Router, Routes, Route } from "react-router-dom";
const Home =  ()=> {
 return 'welcome to home page';
};

const Profile =  ()=> {
    return 'welcome to Profile page';
   };
export default function App  () {
    return (
        <>
        <Router>
            <nav>
                <ul>
                    <li>
                    <Link to="/">home</Link>
                    </li>
                    <li><Link to="/profile">Profile</Link></li>
                </ul>
                
                
            </nav>
            <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/profile' element={<Profile/>}></Route>
            </Routes>
        </Router>
        </>
    )
} 