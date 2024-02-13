import RestroCard, { promotedRestro } from "./RestroCard";
import { useState, useEffect, useContext } from "react";
import { END_POINT } from "../../constant.js";
import Simmer from "./Simmer.js";
import { Link } from "react-router-dom";
import UserDetails from "../../utils/userContext.js";

const Body = () => {
  const [listofRestro, setListofRestro] = useState([]);
  const [defaultListofRestro, setDefaultListofRestro] = useState([]);
  const [searchText, setSearchText] = useState("");
  const { setUserName, loggedInUser } = useContext(UserDetails);
  useEffect(() => {
    fetchData();
  }, []);

  const PromotedRestro = promotedRestro(RestroCard);
  const fetchData = async () => {
    const data = await fetch(END_POINT);
    const jsonData = await data.json();
    const op =
      jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    setListofRestro(op);
    setDefaultListofRestro(op);
  };

  function filterFun() {
    const filterData = defaultListofRestro.filter(({ info }) => {
      if (info.avgRating > 4.3) {
        return info;
      }
    });
    setListofRestro(filterData);
  }

  function filterFun1() {
    const filtr = defaultListofRestro.filter((el) =>
      el.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setListofRestro(filtr);
  }

  if (listofRestro.length === 0) {
    return <Simmer />;
  }

  return (
    <div className="flex-col mt-5 items-center">
      <div className="flex m-5 p-4 justify-between h-20">
        <div className="flex-grow-3 flex-shrink-0">
          <input
            type="text"
            className="border-solid border-2 border-black"
            placeholder="search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          <button  className="p-2 m-2 px-2 py-2 bg-green-200 rounded-lg" onClick={filterFun1}>Search</button>
        </div>
        <div className="">
          <button className="rounded-lg p-2 bg-green-400" onClick={filterFun}>Top Rated Restro</button>
        </div>
        <div>
          <label>User Name:</label>
          <input type="text" className="p-2" onChange={(e) => setUserName(e.target.value)} value={loggedInUser}/>
        </div>
      </div>

      <div className="flex">
        <div className="flex flex-wrap">
          {listofRestro.map(({ info }) => (
            <Link to={`/restaurant/${info.id}`} key={info.id}>
              {/* <RestroCard key={info.id} resData={info} /> */}
              <PromotedRestro key={info.id} resData={info} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Body;
