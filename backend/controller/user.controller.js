import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";

export const signUp = async (req, res)=>{
    try {
        const { userName,email,password } = req.body;
        const user = await User.findOne({ email });
        if( user ){
            return res.status(400).json({message:"user already exists"});
        }

        const hashPassword = await bcryptjs.hash(password,10)

        const newUser= new User({
            userName : userName,
            email : email ,
            password : hashPassword
        })

        await newUser.save();
        res.status(201).json({message:"user created successfully"});

    } catch (error) {
        console.log("Error:"+ error.message);
        res.status(500).json({message:"internal server error"}); //500 is the code for internal server 
    }
};

export const login = async (req, res)=>{
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        const isMatch = await bcryptjs.compare(password, user.password);
        if(!user || !isMatch){
            return res.status(400).json({message:" invalid credentials "})
        }else{
            res.status(200).json({
                message:"successfully logged in",user:{
                _id:user._id,
                userName:user.userName,
                email:user.email,
        },
    });
        }
    } catch (error) {
        console.log("error:"+ error.message);
        res.status(500).json ({message:"internal server error"})
    }
}