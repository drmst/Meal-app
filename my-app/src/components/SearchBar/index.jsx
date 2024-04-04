import { useState } from "react";
import { BD_SEARCH_BASE_URL } from "../../urls";
import "./styles.css"

export const SearchBar = ({ setRecipes, setIsClicked }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    console.log(BD_SEARCH_BASE_URL + searchQuery);
    fetch(BD_SEARCH_BASE_URL + searchQuery)
      .then((response) => response.json())
      .then((data) => {
        if (data.meals) return setRecipes(data.meals);
      })
      .catch((error) => setRecipes([]));
    setIsClicked(false);
  };

  return (
    <form action="#">
      <input
        type="text"
        placeholder="Search for recipe"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <input type="submit" value="Search" onClick={handleSearch} />
    </form>
  );
};
