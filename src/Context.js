import React from "react";

export const FavoriteContext = React.createContext();

export default function FavoriteProvider({ children }) {
  const [favoriteArray, setFavoriteArray] = React.useState([]);

  function addToFavorites(movie) {
    setFavoriteArray((prev) => [...prev, { movie }]);
  }

  return (
    <FavoriteContext.Provider value={{ favoriteArray, addToFavorites }}>
      {children}
    </FavoriteContext.Provider>
  );
}
