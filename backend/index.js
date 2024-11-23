import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./routes/book.route.js";
import cors from "cors";
const app = express()
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.mongodbURI;

//connecting to mongodb
try {mongoose.connect(URI, {
    useNewUrlParser:true,
    useUnifiedTopology:true
});  
console.log("connected to mongodb");
} catch (error) {
    console.log("error", error);
}

//defining routes
app.use("/book",bookRoute);

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`)
})