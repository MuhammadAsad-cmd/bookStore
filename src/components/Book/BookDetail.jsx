import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Box, Checkbox, FormControlLabel, FormLabel, TextField } from '@mui/material'
import { Button } from '@mui/material';



const BookDetail = () => {
    const [inputs, setInputs] = useState({});
    const [checked, setChecked] = useState({});
    const history=useNavigate();


    const id = useParams().id;
    useEffect(() => {
        const fetchHandler = async () => {
            await axios.get(`http://localhost:8080/api/books/${id}`).then(res => res.data)
                .then(data => setInputs(data.book));
        }
        fetchHandler();
    }, [id]);

    const sendRequest =async()=>{
        await axios.put(`http://localhost:8080/api/books/${id}`,{
            name:String(inputs.name),
            author:String(inputs.author),
            description:String(inputs.description),
            price:Number(inputs.price),
            image:String(inputs.image),
            available:Boolean(checked),
        })
    }
    const HandleSubmit = async (e) => {
        e.preventDefault();
        try {
            await sendRequest();
            history(`/books/${id}`);
        } catch (error) {
            // Handle the error here if the update request fails
            console.error("Error updating book:", error);
        }
    };
    

    const HandleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <div>
            {
                inputs &&
                <form onSubmit={HandleSubmit}>
                    <Box display="flex"
                        flexDirection="column"
                        justifyContent={"center"}
                        maxWidth={"700px"}
                        alignContent={"center"}
                        alignSelf={"center"}
                        marginLeft={"auto"}
                        marginRight={"auto"}
                        marginTop={5}
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

                        <Button sx={{ mt: "20px" }} variant="contained" type='submit' >Udate Books</Button>


                    </Box>
                </form>}
        </div>
    )
}

export default BookDetail
