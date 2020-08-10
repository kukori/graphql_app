import React, {useState} from 'react';
import { useQuery } from '@apollo/client';
import { getAuthors } from '../queries/queries';

const AddBook = () => {

    const { loading, error, data } = useQuery(getAuthors);
    const [name, setName] = useState('')
    const [genre, setGenre] = useState('')
    const [authorId, setAuthorId] = useState('')

    const onAddClick = (event) => {
        event.preventDefault();
        console.log({name, genre, authorId});
        setName('');
        setGenre('');
        setAuthorId('');
    }

    return (
        <form id="add-book">
            <div className="field">
                <label>Book name:</label>
                <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
            </div>
            <div className="field">
                <label>Genre:</label>
                <input type="text" value={genre} onChange={(event) => setGenre(event.target.value)}/>
            </div>
            <div className="field">
                <label>Author:</label>
                <select disabled={loading} value={authorId} onChange={(event) => setAuthorId(event.target.value)}  >
                    <option>Select author</option>
                    {!loading && data && data.authors && data.authors.map((author) => (
                        <option key={author.id} value={author.id}>{author.name}</option>
                    ))}
                </select>
            </div>
            <button onClick={onAddClick}>+</button>
        </form>
    )
}

export default AddBook
