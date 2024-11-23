import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    name: String,
    title: String,
    price: Number,
    author : String,
    category : String,
    image : String,
})
const book = mongoose.model("Book",bookSchema);

export default book;