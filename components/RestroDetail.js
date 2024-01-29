import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RESTRO_DETAIL_URL, CDN_URL } from "../constant";
import Simmer from "./Simmer";
import useRestroDetail from "../utils/useRestroDetail";


const RestaurantDetail = () => {

  const { id } = useParams();
  const restroDetail = useRestroDetail(id)

  if (restroDetail.length === 0) {
    return <Simmer />;
  } else {
    const { name, address, cloudinaryImageId, avgRating } =
      restroDetail.data.cards[0].card.card.info;
    console.log("RES", name);
    // const imageUrl = `${RESTRO_DETAIL_URL}/${cloudinaryImageId}`
    const imageUrl = `${CDN_URL}/${cloudinaryImageId}`
    // console.log('IMG', imageUrl)
    return (
      <div>
        <h1>{name}</h1>
        <h4>{address}</h4>
        <h4>Rating: {avgRating}</h4>
        <img src={imageUrl} alt="Food Image" height="200" width="300"/>
      </div>
    );
  }
};

export default RestaurantDetail;
