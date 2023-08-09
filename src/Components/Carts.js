import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import Carddetails from "./CardDetails";
import Card from "./UtilityComponents/Card";
import cartEmpty from "../Asset/emptyCart.png"
import Footer from "./UtilityComponents/Footer";

const Carts = (props)=>{

    const [ProductDetails, setProductDetails] = useState();
    const [isShowPopupModal,setIsShowPopupModal] = useState(false);
    const cartsSlice = useSelector((state)=>state.cartsSlice);
   //const {state} = useLocation();
   const handleCounter = (productDeatils,isShowPopupModal) =>{
    const ProductDetails = JSON.parse(productDeatils)
    setProductDetails(ProductDetails);
    setIsShowPopupModal(isShowPopupModal);
  }
  const closeModal =()=>{
    setIsShowPopupModal(false);
  }
    return(
    <>
        <div className="container-div">
         {cartsSlice.carts.length <=0 ?<div className="flex cartNotAvailable">
            <img src={cartEmpty}></img>
            <Footer></Footer>
         </div>:<div className="flex home-carts">
           {cartsSlice.carts.map((product,index)=>{
              return (<div key={index}>
              <Card product={product} btnType="removeCart" onClickBtn={handleCounter}></Card>
              </div>)
           })}
         </div>}
        </div>
        {isShowPopupModal && <Carddetails closeModal={closeModal} ProductDetails={ProductDetails}></Carddetails>}

    </>);
}

export default Carts;