import { useState, useEffect } from "react"

const useOnline = () => {
    const [isOnline, setIsOnline] = useState(true);
    const goOnline = () =>{
        setIsOnline(true);
    }

    const goOffline = () =>{
        setIsOnline(false);
    }
    useEffect(()=>{
        window.addEventListener("online", goOnline);
        window.addEventListener("offline", goOffline);
    
        return ()=>{
            window.removeEventListener("online",goOnline);
            window.removeEventListener("offline", goOffline);
        }
    },[]);

    return isOnline;

}

export default useOnline;