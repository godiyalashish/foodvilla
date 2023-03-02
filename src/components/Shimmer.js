const Shimmer = () =>{
    return (
        <>
            <div className="mx-4 h-32 w-auto animate-pulse bg-gray-400"></div>
            <div className="my-4 flex flex-wrap items-strech justify-center gap-x-2 gap-y-3 auto-rows-max">
                {Array(18).fill("").map((e,index) => (<div key = {index} className="h-60 w-52 animate-pulse bg-gray-400"></div>))}
            </div>
        </>
    )
};

export default Shimmer;