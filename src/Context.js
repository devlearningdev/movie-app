import React from "react";

export const FavoriteContext = React.createContext();

export default function FavoriteProvider({ children }) {
  const [favoriteArray, setFavoriteArray] = React.useState([]); //array receiving bookmarked movies by user.

  //function adding bookmarked movies into the array.
  function addToFavorites(movie) {
    setFavoriteArray((prev) => [...prev, { movie }]);
  }

  //function removing bookmarked movies from the array.
  function removeFromFavorites() {
    console.log("click");
    favoriteArray.pop();
  }

  return (
    <FavoriteContext.Provider
      value={{ favoriteArray, addToFavorites, removeFromFavorites }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}
