import { CDN_URL } from "../../constant";
import { useContext } from "react";
import UserDetails from "../../utils/userContext";
import { useDispatch } from "react-redux";
import { addItem } from "../../utils/cartSlice";

const Item = ({items}) => {
const dispatch = useDispatch();
const userData = useContext(UserDetails);
const handleCart = (item) => {
  dispatch(addItem(item));
}

  return (
    <div>
      
      {items.map((item) => {
        return (
          <div
            className="p-2 m-2 border-b-2 border-gray-300 text-left flex justify-between"
            key={item.card.info.id}
          >
            <div className="w-9/12">
              <div className="py-2">
                <span className="font-bold">{item.card.info.name}</span>
                <span className=""> - ₹ {item.card.info.price / 100}</span>
              </div>
              <p className="text-xs pt-2">{item.card.info.description}</p>
            </div>
            { userData.loggedInUser }
            <div className="w-3/12 p-4">
              <div className="absolute">
                <button className="p-2 mx-1 rounded-lg shadow-lg m-auto bg-black text-white"
                onClick={() => handleCart(item)}
                >
                  Add+
                </button>
              </div>
                <UserDetails.Consumer>
                    { ({loggedInUser}) => <h1>User ITEM: {loggedInUser}</h1> }
                </UserDetails.Consumer>
                <img
                  src={`${CDN_URL}/${item.card.info.imageId}`}
                  className=""
                  alt="Food Image"
                  height="100"
                  width="100"
                />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Item;
