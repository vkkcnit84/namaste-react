import { useEffect, useState } from "react"
const onlineStatus = () => {
const [isOnline, setIsonline] = useState(true);

useEffect(() => {

   window.addEventListener("online", () => {
        setIsonline(true);
    });

    window.addEventListener("offline", () => {
        setIsonline(false);
        console.log(isOnline);
    });
}, [])
    return isOnline;
}

export default onlineStatus;