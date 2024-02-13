import { useParams } from "react-router-dom";
import { CDN_URL } from "../../constant";
import Simmer from "./Simmer";
import useRestroDetail from "../../utils/useRestroDetail";
import RestroCategory from "../components/RestroCategory"
import { useState } from "react";

const RestaurantDetail = () => {

  const { id } = useParams();
  const restroDetail = useRestroDetail(id)
  const [showIndex, setShowIndex] = useState(3);

  if (restroDetail.length === 0) {
    return <Simmer />;
  } else {
    const { name, address, cloudinaryImageId } = restroDetail.data.cards[0].card.card.info;

    const imageUrl = `${CDN_URL}/${cloudinaryImageId}`

    const itemdata = restroDetail.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter((item) => {
      if (item.card.card['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory") {
        return item.card.card;
      }
    });
    
    return (
      <div className="text-center">
        <h1 className="text-3xl font-bold my-2">{name}</h1>
        <p className="font-bold">{address}</p>
        {
          itemdata.map(({ card },index) => (
            <><RestroCategory 
                card={card}
                showIndex={ (showIndex === index) ? true : false }
                setShowIndex={() => setShowIndex(index)}
            /></>
          ))
        }
        <img className="text-center" src={imageUrl} alt="Food Image" height="200" width="300"/>
      </div>
    );
  }
};

export default RestaurantDetail;
