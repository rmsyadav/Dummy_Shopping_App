import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Navbarcss from "../Stylesheet/Navbar.css"
import img from "../Asset/cartsImage.png";
import { useContext, useState } from "react";
import MyContext from "../Store/MyContext";
import { fetchProduct, setProducts } from "../Slice/ProductsSlice";

const Navbar = ()=>{
    const cartsSlice = useSelector((state)=>state.cartsSlice);
    const productSlice = useSelector((state)=>state.productSlice);
    const dispatch = useDispatch();
    const [brandName,setBrandName] = useState("");
    const navigate =  useNavigate();

    const searchItems = (e) => {
        setBrandName(e.target.value);
    }
    const searchProduct = () =>{
       const products = productSlice && productSlice.products && productSlice.products.filter((product)=>{
            return product.brand === brandName
        })
      if(products.length > 0)  
      {
        dispatch(setProducts(products));
      }
      else {
        dispatch(fetchProduct());
      }
      
    }
 
    const redirectToCartsPage = () =>{
        console.log(cartsSlice.carts);
        navigate('/carts',{state:cartsSlice.carts});
    }
    return (
        <>
          <div className="container-fluid header-banner">
              <div className="container-div">
                  <div className="header-banner-text">
                     <h1 className="banner-text">📣 Products is now available in less prize! check more →</h1>
                  </div>
                  
              </div>
          </div>
          <nav>
        <div className="container-div main-nav flex">
            <span href="#" className="Company-logo">
                <label>Shopping Store →</label>
            </span>
            <div className="nav-links">
               <ul className="flex nav-list">
                    <li>
                        <NavLink to="/" className="hover-NavLink">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/carts" className="hover-NavLink">Carts</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className="hover-NavLink">About</NavLink>
                    </li>
                    <li className="flex">
                        <input type="search" value={brandName} placeholder="search"  class="form-control" onChange={searchItems}/>
                        <button type="button" class="btn btn-outline-primary" onClick={searchProduct}>Search</button>
                    </li>
                   <li>
                    <button type="button" className="btn cartImageBtn cart-button" onClick={redirectToCartsPage}>
                           <span className="badge bg-warning text-primary cart-text">{cartsSlice.carts.length}</span>
                    </button>
                    </li>
                    <li>
                        <NavLink to="#" className="hover-NavLink secondary-button">Sign in</NavLink>
                    </li>
                    <li>
                       
                        <NavLink to="signup" className="hover-NavLink primary-button">Sign up</NavLink>
                    </li>
               </ul>
            </div>
            
           </div>
     </nav>
        </>
    );

}

export default Navbar;