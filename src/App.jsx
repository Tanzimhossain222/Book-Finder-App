import BookGrid from "./components/books/BookGrid";
import Header from "./components/common/Header";
import Layout from "./components/layout/Layout";
import { books } from "./db/mockData";

const App = () => {
  const handleSearch = (term) => {
    console.log(term);
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
