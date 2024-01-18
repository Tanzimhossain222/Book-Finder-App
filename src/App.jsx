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
    console.log(option);
  };

  return (
    <>
      <Layout>
        <main className="my-10 lg:my-14">
          <Header onSearch={handleSearch} onSort={handleSort} />
          <BookGrid books={books} />
        </main>
      </Layout>
    </>
  );
};

export default App;
