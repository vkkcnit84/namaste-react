import { CDN_URL } from "../constant";
const RestroCard = (props) => {
    const { resData } = props;
    const {
        title,
        name,
        address,
        cloudinaryImageId,
        avgRating
    } = resData
    const imageUrl = `${CDN_URL}/${cloudinaryImageId}`
 return (  <>
    <div className="card">
        <img src={imageUrl} alt="Food Image" height="200" width="300"/>
        <h1>{name}</h1>
        <h4>{address}</h4>
        <h4>Rating: {avgRating}</h4>
    </div>
 </>)
}

export default RestroCard;