import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Book from './Book';
import "./book.css";
const URL = "http://localhost:8080/api/books/";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data)

}

const Books = () => {
  const [books, setBooks] = useState();

  useEffect(() => {
    fetchHandler().then(data => setBooks(data.books));
  }, []);




  return (
    <div>
      <ul>
        {books &&
          books.map((book, i) => (
            <li className='book' key={i}>
              <Book book={book} />

            </li>
          ))
        }
      </ul>
    </div>

  )
}

export default Books
