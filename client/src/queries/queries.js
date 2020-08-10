import { gql } from '@apollo/client';

export const getAuthors = gql`
{
    authors {
        name
        id
    }
}
`;

export const getBooks = gql`
    {
        books {
            name
            id
        }
    }
`;