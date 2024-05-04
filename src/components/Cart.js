import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

 

const Cart = ()=>{
    
    const dispatch = useDispatch();
    const handleClearCart = ()=>{
      dispatch(clearCart())
    }

     const cartItems = useSelector((store)=> store.cart.items);
     // console.log(cartItems);
    return ( <div className="m-4 p-4 text-center">
      <h1 className="text-2xl font-bold">cart</h1>
      <div className="w-6/2 m-auto">
         <button className="m-2 p-2 bg-black text-white rounded-lg"onClick={handleClearCart()}>Clear Cart</button>
         { cartItems.length === 0 && (<h2>cart is empty . Add items to cart</h2>)}
         <ItemList items={cartItems}/>

         
      </div>
    </div>)
}

export default Cart;