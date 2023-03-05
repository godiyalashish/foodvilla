import { useDispatch, useSelector } from "react-redux";
import store from "../utils/store";
import CartItem from "./CartItem";
import Bill from "./Bill";
import { clearCart, clearCount } from "../utils/cartSlice";

const Cart = () => {
  const cartCount = useSelector((store) => store.cart.count);
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handelClearCart = () =>{
    dispatch(clearCart());
    dispatch(clearCount());
  }
  if (cartCount === 0) return <p className=" flex items-center justify-center mt-20 h-screen text-center text-3xl font-bold">Add Items to cart</p>;
  return (
    <div className="flex w-full mt-20 h-screen p-3">
      <div className="flex flex-col p-1 w-10/12">
        {cartItems?.map((item) => (
          <CartItem key={item.id} item = {item} />
        ))}
      </div>
      <div className="flex flex-col w-full p-3">
        <button className="bg-orange-700 rounded-lg mb-3 text-2xl text-white font-bold w-full p-2" onClick={handelClearCart}>Clear Cart</button>
        <Bill/>
        <button className="bg-green-800 mt-2 text-white text-xl font-bold w-1/2 h-10 rounded-lg">Confirm</button>
      </div>
    </div>
  );
};

export default Cart;
