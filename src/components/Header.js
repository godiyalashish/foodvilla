import { useState } from "react";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { useSelector } from "react-redux";
import store from "../utils/store";


const Title = () => (
    <a href="/" className="logo">
        <img data-testid="logo" alt="logo" className="w-14 h-14" src={Logo}/>
    </a>
);

const Header = () =>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const isOnline = useOnline();
    const cartItems = useSelector(store => store.cart.count)
    return(
    <div className="flex justify-between items-center p-2 bg-pink-50 shadow-lg fixed top-0 left-0 right-0 z-10">
        <Title/>
        <div className="nav-items">
            <ul className="flex" >
               <Link to={'/'}> <li className ="px-2">Home</li></Link>
               <Link to={'/about'}><li className ="px-2">About</li></Link>
               <Link to={'/contact'}><li className ="px-2">Contact</li></Link>
               <Link to={'/mart'}><li className ="px-2">Mart</li></Link>
               <Link to={'/cart'}><li data-testid="cart" className ="px-2">Cart-{cartItems}</li></Link>
            </ul>
        </div>
        <h1 data-testid="isOnline-status">{isOnline?"✅" : "❗"}</h1>
        {
            (isLoggedIn) ? <button onClick={()=>setIsLoggedIn(false)}>Logout</button> : <button onClick={()=>setIsLoggedIn(true)}>Login</button>
        }
        
    </div>
    
)}

export default Header;