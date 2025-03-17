import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    const cartItems = useSelector((store) => store.cart.items); 

    return (
        <div className="p-4 m-4 text-center">
           <div className="font-bold text-2xl ">Cart</div>
           <div className="w-6/12 m-auto">
              <button 
                className="p-2 m-2 bg-black text-white rounded-lg"
                onClick={handleClearCart}
              >
                Clear Cart
              </button>
              {cartItems.length === 0 && (
                <h1> Cart is empty. Add Items to the cart!</h1>
              )}
              <ItemList items={cartItems}/>
           </div>
        </div>
    )
}

export default Cart; 