import PropsType from "prop-types";
import { useState } from "react";
import AddToCartButton from "../Icons/AddToCartButton";
import FavoriteButton from "../Icons/FavoriteButton";
import StarRating from "./StarRating";

const BookItem = ({ book, onFavoriteToggle }) => {
  const [isFavorite, setIsFavorite] = useState(book.isFavorite);

  const handleFavoriteToggle = () => {
    onFavoriteToggle(book.id, !isFavorite);
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-center rounded-md border border-[#324251]/30 bg-white p-4">
        <img className="max-w-[144px]" src={book.thumbnail} alt={book.title} />
      </div>

      <div className="space-y-3">
        <h4 className="text-lg font-bold lg:text-xl">{book.title}</h4>
        <p className="text-xs lg:text-sm">
          By: <span>{book.author}</span>
        </p>
        <div className="flex items-center justify-between">
          <h4 className="text-lg font-bold lg:text-xl">{book.price}</h4>

          <StarRating rating={book.stars} />
        </div>

        <div className="flex items-center gap-3 text-xs lg:text-sm">
          <AddToCartButton />
          <FavoriteButton
            isFavorite={isFavorite}
            onToggle={handleFavoriteToggle}
          />
        </div>
      </div>
    </div>
  );
};

BookItem.propTypes = {
  book: PropsType.object.isRequired,
  onFavoriteToggle: PropsType.func.isRequired,
};

export default BookItem;
