import { useState } from "react";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { useDispatch, useSelector } from "react-redux";
import store from "../utils/store";
import { logout } from "../utils/UserSlice";

const Title = () => (
  <a href="/" className="logo">
    <img data-testid="logo" alt="logo" className="w-14 h-14" src={Logo} />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();
  const cartItems = useSelector((store) => store.cart.count);
  const user = useSelector((store) => store.user.user);
  const dispatch = useDispatch();
  const handelLogout = () => {
    dispatch(logout());
  };
  return (
    <div className="flex justify-between items-center p-2 bg-pink-50 shadow-lg fixed top-0 left-0 right-0 z-10">
      <Title />
      <div className="nav-items">
        <ul className="flex">
          <Link to={"/"}>
            {" "}
            <li className="px-2">Home</li>
          </Link>
          <Link to={"/about"}>
            <li className="px-2">About</li>
          </Link>
          <Link to={"/contact"}>
            <li className="px-2">Contact</li>
          </Link>
          <Link to={"/mart"}>
            <li className="px-2">Mart</li>
          </Link>
          <Link to={"/cart"}>
            <li data-testid="cart" className="px-2">
              Cart-{cartItems}
            </li>
          </Link>
        </ul>
      </div>
      <h1
        data-testid="isOnline-status"
        className="transititext-primary text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
        title="You are Online"
      >
        {isOnline ? "✅" : "❗"}
      </h1>
      {user.length > 0 ? (
        <div className="flex items-center">
          <p className="text-lg font-bold">Hi {user[0].email}</p>
          <button
            className="bg-red-100 font-bold p-3 ml-2 rounded-sm"
            onClick={handelLogout}
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="bg-green-200 font-bold p-3 ml-1 rounded-sm">
          <Link to={"/login"}>Login</Link>
        </div>
      )}
    </div>
  );
};

export default Header;
