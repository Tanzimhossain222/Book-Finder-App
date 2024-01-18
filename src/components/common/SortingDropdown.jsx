import PropTypes from "prop-types";
import { useState } from "react";

const SortingDropdown = ({ onSortBook }) => {
  const [sortOption, setSortOption] = useState("");

  return (
    <>
      <select
        className="cursor-pointer rounded-md border px-4 py-2 text-center text-gray-600"
        name="sortBy"
        id="sortBy"
        value={sortOption}
        onChange={(e) => {
          setSortOption(e.target.value);
          onSortBook(e.target.value);
        }}
      >
        <option value="">Sort</option>
        <option value="name_asc">Name (A-Z)</option>
        <option value="name_desc">Name (Z-A)</option>
        <option value="year_asc">Publication Year (Oldest)</option>
        <option value="year_desc">Publication Year (Newest)</option>
      </select>
    </>
  );
};

SortingDropdown.propTypes = {
  onSortBook: PropTypes.func.isRequired,
};

export default SortingDropdown;
