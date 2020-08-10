import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { getBooks } from '../queries/queries';
import BookDetails from './BookDetails';

const BookList = () => {
    const { loading, error, data } = useQuery(getBooks);
    const [selectedBook, setSelectedBook] = useState(null);

    return (
        <div id="book-list-container">
            <ul id="book-list">
                {!loading && data && data.books && data.books.map((book) => (
                    <li key={book.id} onClick={() => setSelectedBook(book.id)} >{book.name}</li>
                ))}
            </ul>
            <div>
                <p>Book details:</p>
                {selectedBook && <BookDetails bookId={selectedBook}/> }
            </div>
        </div>
    )
}

export default BookList;
