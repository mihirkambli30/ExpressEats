import { IMG_CDN_URL } from "../../config";

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  avgRatingString,
}) => {
  return (
    <div className="card">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      ></img>
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRatingString} Stars</h4>
    </div>
  );
};

export default RestaurantCard;
