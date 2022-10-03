import React, {useContext } from 'react'
import {BooklistContext} from "./BookContext"

function Booklist() {
    const [books, setBooks] = useContext(BooklistContext)
    
    return (
        <div>
            <h1>Liste de livres</h1>
            {
                books.map(book => (
                    <div key={book.id}>
                        <h3> {book.name} </h3>
                        <span> {book.author} </span>
                        <hr/>
                    </div>
                ))
            }
        </div>
    )

}

export default Booklist