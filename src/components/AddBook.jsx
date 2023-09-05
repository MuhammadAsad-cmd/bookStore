import { Box, Checkbox, FormControlLabel, FormLabel, TextField } from '@mui/material'
import React, { useState } from 'react';
import { Button } from '@mui/material';
import axios from 'axios';
import {useNavigate} from "react-router-dom"


const AddBook = () => {
  const history =useNavigate();
  const [inputs, setInputs] = useState({
    name: '',
    description: '',
    price: '',
    author: '',
    image: '',
  });
  const [checked, setChecked] = useState(false);


  const HandleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  }

  const sendRequest=async()=>{
    await axios.post("http://localhost:8080/api/books/",{
      name:String(inputs.name),
      author:String(inputs.author),
      description:String(inputs.description),
      price:Number(inputs.price),
      image:String(inputs.image),
      available:Boolean(checked),
    }).then(res=>res.data);
  }

  const HandleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(()=>history('/books'))
    console.log(inputs,checked);
  };


  return <form onSubmit={HandleSubmit}>
    <Box display="flex"
      flexDirection="column"
      justifyContent={"center"}
      maxWidth={"700px"}
      alignContent={"center"}
      alignSelf={"center"}
      marginLeft={"auto"}
      marginRight={"auto"}
      marginTop={10}
    >
      <FormLabel>Name</FormLabel>
      <TextField margin='normal'
        value={inputs.name}
        onChange={HandleChange}
        fullWidth
        variant='outlined'
        name='name' />
      <FormLabel>Author</FormLabel>
      <TextField value={inputs.author}
        onChange={HandleChange} margin='normal' fullWidth variant='outlined' name='author' />
      <FormLabel>Description</FormLabel>
      <TextField value={inputs.description}
        onChange={HandleChange} margin='normal' fullWidth variant='outlined' name='description' />
      <FormLabel>Price</FormLabel>
      <TextField value={inputs.price}
        onChange={HandleChange} type='number' margin='normal' fullWidth variant='outlined' name='price' />
      <FormLabel>Image</FormLabel>
      <TextField value={inputs.image}
        onChange={HandleChange} margin='normal' fullWidth variant='outlined' name="image" />

      <FormControlLabel control=
        {
          <Checkbox checked={checked} onChange={() => setChecked(!checked)}
          />
        }
        label="Available" />

      <Button variant="contained" type='submit' >Add</Button>


    </Box>
  </form>
}

export default AddBook
