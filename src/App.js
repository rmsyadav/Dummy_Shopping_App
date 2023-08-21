import React from 'react';
import { Suspense, useState } from 'react';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Protected from './Components/UtilityComponents/ProtectingRouting';
import { useSelector } from 'react-redux';
const Carts = React.lazy(()=> import("./Components/Carts"));
const AboutUs = React.lazy(()=> import("./Components/AboutUs"));
const Home = React.lazy(()=> import("./Components/Home"));
const Signup = React.lazy(()=> import('./Components/SignUp'))
const Signin = React.lazy(()=> import('./Components/SignIn'))
function App() {
   const {isSignin} = useSelector((state)=>state.userDetails);
  return (
      <Routes>
        <Route exact path='/' element={<Home></Home>}></Route>
        <Route exact path='/carts' element=
          { 
              <Protected isSignedIn={isSignin}>
              <Carts></Carts>
            </Protected>
          }
        ></Route>
        <Route exact path='/about' element={<AboutUs></AboutUs>}></Route>
        <Route exact path='/signup' element={<Signup></Signup>}></Route>
        <Route exact path='/signin' element={<Signin></Signin>}></Route>
      </Routes>
  );
}

export default App;
