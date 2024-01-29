import { useEffect, useState } from "react";
import {RESTRO_DETAIL_URL} from "../constant";

 const  useRestroDetail = (id) => {

    const [restroDetail, setRestroDetail] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const data = await fetch(`${RESTRO_DETAIL_URL}&restaurantId=${id}`);
        const jsonData = await data.json();
        setRestroDetail(jsonData);
      };
    return restroDetail;
}

export default useRestroDetail