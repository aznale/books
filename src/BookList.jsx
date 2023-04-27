import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchBooks = async () => {

      try {

        const response = await axios.get(
          'https://openlibrary.org/search.json?q=*&limit=50'
        );
        const booksData = response.data.docs;
        setBooks(booksData);
        setIsLoading(false);

      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      }
    };
    fetchBooks();
  }, []);


  return (
    <>
      <h1>Books</h1>
      {isLoading && !isError && <p>Loading...</p>}
      {!isLoading && isError && <p>Error: Could not fetch books</p>}
      {!isLoading && !isError && (
        <ul>
          {books.map((book) => (
            <li key={book.key}>
              <strong>Title:</strong> {book.title} <br />
              <strong>Year:</strong> {book.publish_year && book.publish_year[0]} <br />
              <strong>ISBN:</strong> {book.isbn && book.isbn[0]} <br />
              <strong>Pages:</strong> {book.number_of_pages} <br />
              <strong>Author:</strong> {book.author_name}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default BookList;