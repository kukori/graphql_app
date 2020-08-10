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

export const addBookMutation = gql`
    mutation addBook($name: String!, $genre: String!, $authorId: ID!) {
        addBook (name: $name, genre: $genre, authorId: $authorId) {
            name
            id
        }
    }
`;