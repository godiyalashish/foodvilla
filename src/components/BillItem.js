import React from "react";
import { useSelector } from "react-redux";

function BillItem() {
  const cart = useSelector((store) => store.cart.items);
  const totalAmount = () =>{
    let total = 0;
    cart?.map(item=>total += (item.price* item.count));
    return total/100;
  }
  return (
    <>
      {cart?.map((item) => (
        <div key={item.id} className="w-full flex my-3">
          <div className="flex w-3/4 items-start">
            <p>
              {item.name} × {item.count}
            </p>
          </div>
          <div className="flex items-start">
            <p>₹{(item.price * item.count/100)}</p>
          </div>
        </div>
      ))}

      <hr/>

      <div className="w-full flex my-3">
        <div className=" flex w-3/4  items-start">
            <p className="text-xl font-bold">Total</p>
        </div>
        <div className="flex items-start">
            <p className="text-xl font-bold">₹{totalAmount()}</p>
        </div>
      </div>
    </>
  );
}

export default BillItem;
