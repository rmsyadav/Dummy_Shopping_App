import { useContext, useEffect, useState } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchProduct} from "../Slice/ProductsSlice";
import Card from "./UtilityComponents/Card";
import Navbarcss from "../Stylesheet/Navbar.css"
import Carddetails from "./CardDetails";
import Footer from "./UtilityComponents/Footer";
import MyContext from "../Store/MyContext";
function Home() {
   
    const dispatch = useDispatch();
    const [ProductDetails, setProductDetails] = useState();
    const [isShowPopupModal,setIsShowPopupModal] = useState(false);
    const productSlice = useSelector((state)=>state.productSlice);
    useEffect(()=>{
      dispatch(fetchProduct());
      
    },[])
    const handleProductStore = (productDeatils,isShowPopupModal) =>{
        //ContextData.setContextValue(ContextData.ContextValue+1);
        const ProductDetails = JSON.parse(productDeatils)
        setProductDetails(ProductDetails);
        setIsShowPopupModal(isShowPopupModal);
        
    }
    const closeModal =()=>{
      setIsShowPopupModal(false);
    }
    return (
       <>
        <div className="container">
          <div className="flex home-carts">
           {productSlice && productSlice.products && productSlice.products.map((product,index)=>{
              return (<div key={index}>
              <Card product={product} onClickBtn={handleProductStore}></Card>
              </div>)
           })}
          </div>
        </div>
        {isShowPopupModal && <Carddetails closeModal={closeModal} ProductDetails={ProductDetails}></Carddetails>}

       </>
    );
  }
  
  export default React.memo(Home);
  