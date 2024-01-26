import RestroCard from "./RestroCard";
import resList from "../mockData.js";
import { useState, useEffect } from "react";
import {END_POINT}  from "../constant.js";
import Simmer from "./Simmer";

const Body = () => {
const [listofRestro, setListofRestro] = useState([]);
const [defaultListofRestro, setDefaultListofRestro] = useState([]);
const [searchText, setSearchText] = useState("");

useEffect(()=> {
 fetchData()
},[]);

const fetchData = async () => {
  const data = await fetch(END_POINT);
  const jsonData = await data.json();
  const op = jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
  setListofRestro(op);
  setDefaultListofRestro(op);
}


function filterFun() {
  const filterData = defaultListofRestro.filter(({info}) => {
    if(info.avgRating>4.3){
      return info;
    }
  })
  setListofRestro(filterData);
};

function filterFun1() {
  const filtr = defaultListofRestro.filter((el) => el.info.name.toLowerCase().includes(searchText.toLowerCase()));
  setListofRestro(filtr);
};

if(listofRestro.length===0){
  return <Simmer />
}

return (
    <div>
     <input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} />

      <button onClick={filterFun1}>Search</button>
      <button onClick={filterFun}>Good Rating Restro</button>
      
      <div className="maincard">
        <div className="">
          {listofRestro.map(({info}) => (
            <RestroCard key={info.id} resData={info} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Body;
