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

export const getBook = gql`
    query($id: ID!) {
        book(id: $id) {
            id
            name
            genre
            author {
                id
                name
                age
                books {
                    id
                    name
                }
            }
        }
    }
`;

export const addBookMutation = gql`
    mutation addBook($name: String!, $genre: String!, $authorId: ID!) {
        addBook (name: $name, genre: $genre, authorId: $authorId) {
            id
            name
            genre
            authorId
        }
    }
`;