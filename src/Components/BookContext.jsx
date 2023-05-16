import React, { createContext, useState } from "react";

export const BooklistContext = createContext();

export const BooklistProvider = ({ children }) => {
  const [books, setBooks] = useState([
    {
      id: 1,
      name: "MySQL 5",
      author: "Cyril Thibaud",
    },
    {
      id: 2,
      name: "Merise",
      author: "Laurent Audibert",
    },
    {
      id: 3,
      name: "SQL Server 2008",
      author: "Jérôme Gabillaud",
    },
  ]);

  return (
    <BooklistContext.Provider value={[books, setBooks]}>
      {children}
    </BooklistContext.Provider>
  );
};
