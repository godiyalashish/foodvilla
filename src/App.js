import React from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import { RestaurantList } from "../config";
import {imgLink} from "../config";
import Footer from "./components/Footer";
import Body from "./components/Body";


const App = () => (
    <>
        <Header />
        <Body />
        <Footer />
    </>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
