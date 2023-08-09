import React from 'react';
import { Suspense, useState } from 'react';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import MyContext from './Store/MyContext';
import MyErrorBoundary from './Components/UtilityComponents/MyErrorBoundary';
import Protected from './Components/UtilityComponents/ProtectingRouting';
import { useSelector } from 'react-redux';
const Navbar = React.lazy(()=>import("./Components/Navbar"));
const Carts = React.lazy(()=> import("./Components/Carts"));
const AboutUs = React.lazy(()=> import("./Components/AboutUs"));
const Home = React.lazy(()=> import("./Components/Home"));
const Signup = React.lazy(()=> import('./Components/SignUp'))
const Signin = React.lazy(()=> import('./Components/SignIn'))
function App() {
   const {isSignin} = useSelector((state)=>state.userDetails);
   const [contextValue,setContextValue] = useState({
    brandName:""
  })
  
 
  return (
    <>
    <MyContext.Provider value={{contextValue,setContextValue}}>
     <Suspense fallback={<div>Loadin...</div>}>
     <MyErrorBoundary>
      <Router>
        <Navbar></Navbar>
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
        </Router>
        </MyErrorBoundary>
        </Suspense>  
        </MyContext.Provider>  
    </>
  );
}

export default App;
