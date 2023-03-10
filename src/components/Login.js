import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import store from "../utils/store";
import { login } from "../utils/UserSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user.user)
  const handelLogin = () =>{
    dispatch(login({email,password}));
    navigate("/");
  }
  return (
    <div className="flex w-full mt-20 h-screen items-center justify-center ">
      <div className="flex flex-col gap-y-5 bg-pink-100 p-5 rounded-lg drop-shadow-xl w-2/4">
        <input type="text" placeholder="Enter Email" className="text-2xl p-2 bg-white" onChange={(e) => setEmail(e.target.value)} value={email}/>
        <input
          type="password"
          placeholder="Enter Password"
          className="text-2xl p-2 bg-white"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button className="text-xl font-bold bg-green-400 p-4 rounded-md" onClick={ handelLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
