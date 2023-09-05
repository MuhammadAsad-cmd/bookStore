import React from 'react'
import "./book.css";
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const Book = (props) => {
    const history = useNavigate();
    const { _id, name, author, description, price, image } = props.book;


    // const DeleteHandler = async () => {
    //     try{
    //     await axios.delete(`http://localhost:8080/api/books/${_id}`)
    //         .then(res => res.data)
    //         .then(() => history('/books/'))

    //         .then(() => history('/books/'))
    //     }
    //     catch(err){
    //         console.log("Error Deleting Book" ,err);
    //     }
    // }

    const DeleteHandler = async () => {
        try {
          await axios.delete(`http://localhost:8080/api/books/${_id}`);
          history('/books/');
        } catch (err) {
          console.log("Error Deleting Book", err);
        }
      };
      


    return (
        <div className='card'>
            <img src={image} alt={name} />
            <article> By {author}</article>
            <h3>{name}</h3>
            <p>{description}</p>
            <h3> Rs. {price}</h3>

            <Button LinkComponent={Link} to={`/books/${_id}`} variant="text" sx={{ mt: 'auto' }} >Update</Button>
            <Button onClick={DeleteHandler} variant="text" sx={{ mt: 'auto' }}>Delete</Button>


        </div>
    )
}

export default Book
