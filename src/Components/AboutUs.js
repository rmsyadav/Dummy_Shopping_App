import { useNavigate } from "react-router-dom";
import img from "../Asset/StoreImage.jpg";
import Footer from "./UtilityComponents/Footer";
import { useState } from "react";
const AboutUs = ()=>{

    const navigate =  useNavigate();
    const [isDisabled,setIsDisabled] = useState(false);
    const redirectToHomePage = ()=>{
        
          navigate('/');
          setIsDisabled(true);

    }
    return(
        <>
           <header>
            <div class="container header-section flex">
                <div class="header-left flex">
                    <h1>Shopping.com →</h1>
                    <p>Shopping store is a vast Internet -based enterprise that sells books, music, movies, housewares, electronics, toys, and many other goods, either directly or as the middleman between other retailers and Shopping store millions of customers.</p>
                    <button onClick={redirectToHomePage} disabled={isDisabled} class="hover-link primary-button get-started">Get Started</button>
                </div>
                <div class="header-right">
                    <img className="rounded" src={img}/>
                </div>
            </div>
          </header>
          <Footer></Footer>
        </>
    );
}

export default AboutUs;