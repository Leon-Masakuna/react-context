import React, {createContext, useState} from "react";

export const BooklistContext = createContext();

export const BooklistProvider = ({children}) => {
    const [books, setBooks] = useState([
   
        {
            id : 1,
            name : 'Livre1',
            author : 'Héritier'
        },
        {
            id : 2,
            name : 'livre2',
            author : 'Sylvain'
        },
        {
            id : 3,
            name : 'livre3',
            author : 'Gloriane'
        }
    ])

    return(
        <BooklistContext.Provider value={[books, setBooks]}>
            {children}
        </BooklistContext.Provider>
    )
}