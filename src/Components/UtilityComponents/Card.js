import { useDispatch } from "react-redux";
import { addnewcart,removecart } from "../../Slice/CartsSlice";
import Stylesheet from "../../Stylesheet/Navbar.css";

const Card = (props)=>{
    const dispatch = useDispatch();
  
    const handleProductDeatils = (product) =>{   
        props.onClickBtn(JSON.stringify(product),true)

    }
    const addToCarts =(product)=>{
        dispatch(addnewcart(JSON.parse(product)));
    }
    const removeToCarts = (product) =>{
        dispatch(removecart(JSON.parse(product)));
    }
    return (
        <>
           <div class="card BeerListItem-main-card">
                <img class="img-thumbnail BeerListItem-img" style={{maxWidth:"100%",height:"50%"}} src={props.product.thumbnail} alt="Card image cap"/>
                <div class="card-body flex card-adjust">
                    <h3 class="card-title">{props.product.title}</h3>
                    <p class="card-text">Just  <i class="fa fa-inr"></i>{props.product.price}</p>
                    <div className="flex card-footer-btn">
                    <button href="#" class="btn btn-primary card-btn" onClick={(e)=>{handleProductDeatils(JSON.stringify(props.product))}}>Card details</button>
                    {props.btnType && props.btnType == "removeCart" ? <button class="btn btn-warning card-btn" onClick={(e)=>{removeToCarts(JSON.stringify(props.product))}}>Remove Cart</button>: <button href="#" class="btn btn-warning card-btn" onClick={(e)=>{addToCarts(JSON.stringify(props.product))}}>Add To cart</button>}
                    
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;