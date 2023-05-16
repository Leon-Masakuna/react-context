import React, { useContext } from "react";
import { BooklistContext } from "./BookContext";

function Header() {
  // eslint-disable-next-line no-unused-vars
  const [books, setBooks] = useContext(BooklistContext);
  return (
    <div>
      <h1>Nombre de livres : {books.length}</h1>
    </div>
  );
}

export default Header;
