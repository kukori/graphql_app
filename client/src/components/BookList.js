import React from 'react';
import { useQuery } from '@apollo/client';
import { getBooks } from '../queries/queries';

const BookList = () => {

    const { loading, error, data } = useQuery(getBooks);

    return (
        <div>
            <ul id="book-list">
                {!loading && data && data.books && data.books.map((book) => (
                    <li key={book.id}>{book.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default BookList;
