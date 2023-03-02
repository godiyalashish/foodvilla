import { useSelector } from "react-redux";
import store from "../utils/store";

const Cart = () =>{
    const cartCount = useSelector(store => store.cart.count);
    return(
        <>
            <p>cart - {cartCount}</p>
        </>
    )
}

export default Cart;