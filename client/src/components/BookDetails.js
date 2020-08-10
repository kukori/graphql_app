import React, { Fragment } from 'react';
import { useQuery } from '@apollo/client';
import { getBook } from '../queries/queries';

const BookDetails = ({bookId}) => {

    const { loading, error, data } = useQuery(getBook, { variables: { id: bookId } });

    return (
        <div>
            <ul id="book-detils">
                {!loading && data && data.book &&
                    <Fragment>
                        <p>{data.book.name}</p>
                        <p>{data.book.author.name}</p>
                    </Fragment>
                }
            </ul>
        </div>
    )
}

export default BookDetails
