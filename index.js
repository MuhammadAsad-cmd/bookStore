import express from "express";
import mongoose from "mongoose";
const app = express();
import Router from "./routes/bookRoutes";
import  cors  from 'cors';
const port = 8080;


app.use(cors());
app.use(express.json());


app.use("/api/books",Router);


mongoose.connect("mongodb+srv://ma6530028:4GpLyh7MQs819bQL@cluster0.lhezpsp.mongodb.net/BookStore?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));



app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
})

