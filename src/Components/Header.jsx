import React, { useContext } from "react";
import { BooklistContext } from "./BookContext";

function Header() {
  const [books, setBooks] = useContext(BooklistContext);
  return (
    <div>
      <h1>Nombre de livres : {books.length}</h1>
    </div>
  );
}

export default Header;
