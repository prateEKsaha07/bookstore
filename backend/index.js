import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./routes/book.route.js";
import userRoute from "./routes/user.route.js"
import cors from "cors";
const app = express()

// parsing using middleware
app.use(cors());
app.use(express.json());


dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.mongodbURI;

//connecting to mongodb
try {
  mongoose.connect(URI, {
    useNewUrlParser:true,
    useUnifiedTopology:true
});  
console.log("connected to mongodb");
} catch (error) {
    console.log("error", error);
}

//defining routes
app.use("/book",bookRoute);
app.use("/user",userRoute);

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`)
})