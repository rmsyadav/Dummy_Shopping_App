import React from 'react';
import { Suspense, useState } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import MyContext from './Store/MyContext';
import MyErrorBoundary from './Components/UtilityComponents/MyErrorBoundary';
import App from './App';
const Navbar = React.lazy(()=>import("./Components/Navbar"));
function Parentrouter() {
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
        <App></App>        
      </Router>
    </MyErrorBoundary>
    </Suspense>  
    </MyContext.Provider>  
    </>
  );
}

export default Parentrouter;
