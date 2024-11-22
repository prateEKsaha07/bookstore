import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"


const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
   
    <>
        <div className="flex h-screen items-center justify-center  ">
    <div id="my_modal_3" className="border-[2px] shadow-md">
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">

      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
   
    <h3 className="font-bold text-lg">Sign-up now</h3>
    <p className="py-4">Press ESC key or click on ✕ button to close</p>
    
    {/* usernme */}
    <div className="mt-4 spacey-2 py-1">
        <span>username</span>
        <br />
        <input type="text" placeholder='naam bata bsdk' className='w-80 px-3 border rounded-md outline-none ' 
        {...register("username", { required: true })} />
        <br />
        {errors.username && (
          <span className='text-sm text-red-500' >*email is required</span>)}
    </div>

{/* New-email */}
    <div className="mt-4 spacey-2 py-1">
        <span>add a email</span>
        <br />
        <input type="email" placeholder='enter your email' className='w-80 px-3 border rounded-md outline-none '
        {...register("Email", { required: true })}  />
        <br />
         {errors.Email && (
          <span className='text-sm text-red-500' >*email is required</span>)}
    </div>

    {/* new-password */}
    <div className="mt-4 spacey-2 py-1">
        <span>create password</span>
        <br />
        <input type="password" placeholder='enter your password' className='w-80 px-3 border rounded-md outline-none ' 
        {...register("Password", { required: true })}
        />
        <br />
        {errors.Password && (
          <span className='text-sm text-red-500'>*password is required</span>)}
    </div >


    {/* submit-button */}
    <div className="flex justify-around mt-4 ">
       <button 
       className='bg-lime-700 text-white rounded medium px-3 py-1 hover:bg-white hover:text-black duration-300'>Sign-up
       </button>

      <p className='text-md'>Something wrong! {" "}
        <Link to="/"
        className='underline text-yellow-500 cursor-pointer'
        onClick={
            ()=>document.getElementById("my_modal_3").showModal()
            }>home</Link>
            <Login />
        </p>
    </div>
    </form>
  </div>
</div>
    </div>
    </>
  )
}

export default Signup