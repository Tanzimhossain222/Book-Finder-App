import BookItem from "./BookItem";
import PropsType from "prop-types";

const BookGrid = ({books}) => {
  console.log(books);
  return (
    <div>
      <div className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {books.map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

BookGrid.propTypes = {
  books: PropsType.array.isRequired,
};

export default BookGrid;
