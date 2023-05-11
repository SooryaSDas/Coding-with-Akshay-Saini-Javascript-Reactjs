import { useEffect, useState } from "react";
const useOnline = ()=>{
    const [isOnline,setIsOnline] = useState(true);

    useEffect(()=>{
        const handlOnline = ()=>{
            setIsOnline(true);
        };
        const handleOffline = ()=>{
            setIsOnline(false);
        }

        window.addEventListener("online",handlOnline)
        window.addEventListener("offline",handleOffline)

        return ()=>{
            window.removeEventListener("online",handlOnline);
            window.removeEventListener("offline",handleOffline);
        };    
    },[]);

    return isOnline
}
export default useOnline;