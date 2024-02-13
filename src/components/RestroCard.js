import { CDN_URL } from "../../constant";
const RestroCard = (props) => {
    const { resData } = props;
   
    const {
        name,
        address,
        cloudinaryImageId,
        avgRating,
        costForTwo
    } = resData
    const imageUrl = `${CDN_URL}/${cloudinaryImageId}`
 return (  <>
    <div className="flex flex-col items-center justify-center m-4 p-4 bg-gray-100 rounded-lg">
       <div>
       <img className="rounded-lg" src={imageUrl} alt="Food Image" height="200" width="300"/>
       </div>
       <div>
       <h1>{name}</h1>
        <h4>{address}</h4>
        <h4>{costForTwo}</h4>
        <h4>Rating: {avgRating}</h4>
       </div>
    </div>
 </>)
}

// Heighr order component
export const promotedRestro = (RestroCard) => {
   return (props) => {
    return (
        <div>
            <label className="bg-black p-2 m-2 absolute text-white rounded-lg">Promoted</label>
            <RestroCard {...props}></RestroCard>
        </div>
    )
   }
}

export default RestroCard;