
import { useState } from 'react';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Carts from './Components/Carts';
import AboutUs from './Components/AboutUs';
import MyContext from './Store/MyContext';

function App() {

   const [contextValue,setContextValue] = useState({
    brandName:""
  })

    
  return (
    <>
    <MyContext.Provider value={{contextValue,setContextValue}}>
      <Router>
        <Navbar></Navbar>
          <Routes>
            <Route exact path='/' element={<Home></Home>}></Route>
            <Route exact path='/carts' element={<Carts></Carts>}></Route>
            <Route exact path='/about' element={<AboutUs></AboutUs>}></Route>
          </Routes>          
        </Router>
        </MyContext.Provider>  
    </>
  );
}

export default App;
