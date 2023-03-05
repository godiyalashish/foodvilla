import BillItem from "./BillItem";


const Bill = () =>{
    return(
        <div className="flex flex-col w-full">
            <div className="flex w-full">
                <div className="flex items-start w-3/4 text-xl font-bold">Item</div>
                <div className="flex items-start  text-xl font-bold">Price</div>
            </div>
            <hr/>
            <BillItem/>
        </div>
    )
}

export default Bill;