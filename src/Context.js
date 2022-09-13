import React from "react";

export const FavoriteContext = React.createContext();

export default function FavoriteProvider({ children }) {
  const [favoriteArray, setFavoriteArray] = React.useState([]); //array receiving bookmarked movies by user.

  //function adding bookmarked movies into the array.
  function addToFavorites(movie) {
    setFavoriteArray((prev) => [...prev, { movie }]);
  }

  return (
    <FavoriteContext.Provider
      value={{
        favoriteArray,
        setFavoriteArray,
        addToFavorites,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}
