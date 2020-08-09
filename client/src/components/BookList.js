import React from 'react';
import { useQuery, gql } from '@apollo/client';

const getBooks = gql`
    {
        books {
            name
            id
        }
    }
`;

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
