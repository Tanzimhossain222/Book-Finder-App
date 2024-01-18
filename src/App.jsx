import { useState } from "react";
import BookGrid from "./components/books/BookGrid";
import Header from "./components/common/Header";
import Layout from "./components/layout/Layout";
import { books as mockBooks } from "./db/mockData";

const App = () => {
  const [books, setBooks] = useState(mockBooks);

  const handleSearch = (term) => {
    const filteredBooks = mockBooks.filter((book) =>
      book.title.toLowerCase().includes(term.toLowerCase())
    );
    setBooks([...filteredBooks]);
  };

  const handleSort = (option) => {
    // reset books to original state
    if (option === "") {
      setBooks(mockBooks);
      return;
    }

    let sortedBooks = [...books];

    switch (option) {
      case "name_asc":
        sortedBooks.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "name_desc":
        sortedBooks.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "year_asc":
        sortedBooks.sort((a, b) => a.year - b.year);
        break;
      case "year_desc":
        sortedBooks.sort((a, b) => b.year - a.year);
        break;
      default:
        break;
    }

    setBooks(sortedBooks);
  };

  const handleFavoriteToggle = (bookId, isFavorite) => {
    setBooks((prevBooks) => {
      const updatedBooks = prevBooks.map((book) =>
        book.id === bookId ? { ...book, isFavorite } : book
      );
      return updatedBooks;
    });
  };

  return (
    <>
      <Layout>
        <main className="my-10 lg:my-14">
          <Header onSearch={handleSearch} onSort={handleSort} />
          <BookGrid books={books} onFavoriteToggle={handleFavoriteToggle} />
        </main>
      </Layout>
    </>
  );
};

export default App;
