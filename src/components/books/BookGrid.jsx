import PropTypes from "prop-types";
import BookItem from "./BookItem";

const BookGrid = ({ books, onFavoriteToggle }) => {
  return (
    <div>
      {books.length === 0 ? (
        <p className="text-2xl font-bold text-center">No Result Found</p>
      ) : (
        <div className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {books.map((book) => (
            <BookItem
              key={book.id}
              book={book}
              onFavoriteToggle={onFavoriteToggle}
            />
          ))}
        </div>
      )}
    </div>
  );
};

BookGrid.propTypes = {
  books: PropTypes.array.isRequired,
  onFavoriteToggle: PropTypes.func.isRequired,
};

export default BookGrid;
