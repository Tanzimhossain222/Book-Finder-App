import PropsType from "prop-types";
import starSvg from "../../assets/star.svg";

const StarRating = ({ rating }) => {
  const stars = Array.from({ length: rating }, (_, index) => (
    <img key={index} src={starSvg} alt={`star ${index + 1}`} />
  ));

  return (
    <div className="flex items-center space-x-1">
      {stars}
      <span className="text-xs lg:text-sm">({rating} Star)</span>
    </div>
  );
};

StarRating.propTypes = {
  rating: PropsType.number.isRequired,
};

export default StarRating;
