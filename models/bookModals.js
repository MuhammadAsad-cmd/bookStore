import  mongoose  from 'mongoose';

// Declare the Schema of the Mongo model
var BookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    available: {
        type: Boolean,
    },
    image: {
        type: String,
        required: true,
    },
});

//Export the model
const Book = mongoose.model('Book', BookSchema);

export default Book;