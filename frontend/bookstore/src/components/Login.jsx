import React from 'react'
import {Link} from "react-router-dom" 
import { useForm } from "react-hook-form"

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <>
    <div className="">
    <dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog" onSubmit={handleSubmit(onSubmit)} >
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    </form>
    <h3 className="font-bold text-lg">Login now</h3>
    <p className="py-4">Press ESC key or click on ✕ button to close</p>

    {/* email section */}
    <div className="mt-4 spacey-2 py-1">
        <span>email</span>
        <br />
        <input type="email" 
        placeholder='enter your email' 
        className='w-80 px-3 border rounded-md outline-none ' 
        {...register("email", { required: true })} />
        <br />
        {errors.email && <span className='text-red-500' > *email is required</span>}
    </div>

    {/* password section */}
    <div className="mt-4 spacey-2 py-1">
        <span>password</span>
        <br />
        <input type="password" 
        placeholder='enter your password' 
        className='w-80 px-3 border rounded-md outline-none ' 
        {...register("password", { required: true })} />
        <br />
        {errors.password && <span className='text-red-500'> *password is required</span>}
    </div >

    {/* submit button */}
    {/* don't know why but this is not working it happens to work with the x bar in the upper right corner of the dialog box  but not with the login button */}
    <div className="flex justify-around mt-4 "> 
      <button 
      className='bg-lime-700 text-white rounded medium px-3 py-1 hover:bg-white hover:text-black duration-300'
      >login</button>

    {/* redirect to the signup page */}
    <p>not registered yet? {" "}
        <Link to="/Signup" 
        className='underline text-yellow-500 cursor-pointer'>
            signup
            </Link>{" "}
    </p>
    </div>
  </div>
</dialog>
    </div>
    </>
  )
}

export default Login