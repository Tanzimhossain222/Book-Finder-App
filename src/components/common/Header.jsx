import React, { useState } from 'react';
import SearchInput from "./SearchInput";
import SortingDropdown from "./SortingDropdown";

const Header = ({onSearch, onSort}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
   
    onSearch(term);
  };

  const handleSort = (option) => {
    setSortOption(option);
    onSort(option);
  };


  return (
    <>
      <header className="mb-8 lg:mb-10 mx-auto max-w-7xl">
        <div className="mx-auto flex items-end justify-between max-md:max-w-[95%] max-md:flex-col max-md:items-start max-md:space-y-4">
          <div>
            <h6 className="mb-2 text-base lg:text-xl">Trending on 2024</h6>
            <h2 className="mb-6 font-['Playfair_Display'] text-3xl font-bold lg:text-4xl">
              Trending Books of the Year
            </h2>
            <SearchInput  onSearchBook= {handleSearch } />
          </div>

          <div className="flex items-stretch space-x-3">
            <SortingDropdown onSortBook={handleSort} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
