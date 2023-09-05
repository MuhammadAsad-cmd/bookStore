import Book from '../models/bookModals';


// Get All Book
export const getallBooks = async (req, res) => {
    let books;
    try {
        books = await Book.find();
    } catch (err) {
        console.log(err);
    }

    if (!books) {
        return res.status(404).json({ message: "No products found" });
    }
    return res.status(200).json({ books });
};

// Get Books By Id
export const GetbyId = async (req, res, next) => {
    const id = req.params.id;
    let book;
    try {
        book = await Book.findById(id);
        
        if (!book) {
            return res.status(404).json({ message: "No Book found" });
        }

        return res.status(200).json({ book });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Server error" });
    }
};


// Add Book
export const AddBook = async (req, res) => {
    const { name, author, description, price, available, image } = req.body;
    let book;
    try {
        book = new Book({
            name,
            author,
            description,
            price,
            available,
            image,
        });
        await book.save();
    } catch (err) {
        console.log(err);
    }

    if (!book) {
        return res.status(500).json({ message: "Unable To Add" });
    }
    return res.status(201).json({ book });
};

// Update Books
export const UpdateBooks = async (req, res) => {
    const id = req.params.id;
    const { name, author, description, price, available, image } = req.body;
    let book;
    try {
        book = await Book.findByIdAndUpdate(id, {
            name,
            author,
            description,
            price,
            available,
            image,
        });
        book = await book.save();
    } catch (err) {
        console.log(err);
    }
    if (!book) {
        return res.status(404).json({ message: "Unable To Update By this ID" });
    }
    return res.status(200).json({ book });
};

// Delete Books
export const DeleteBook = async (req, res) => {
    const id = req.params.id;
    let book;
    try {
        book = await Book.findByIdAndRemove(id);
    } catch (err) {
        console.log(err);
    }
    if (!book) {
        return res.status(404).json({ message: "Unable To Delete By this ID" });
    }
    return res.status(200).json({ message: "Product Successfully Deleted" });
};