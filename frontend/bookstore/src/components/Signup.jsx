import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'

const Signup = () => {
  return (
    <>
        <div className="flex h-screen items-center justify-center  ">
    <div id="my_modal_3" className="border-[2px] shadow-md">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    </form>
    <h3 className="font-bold text-lg">Sign-up now</h3>
    <p className="py-4">Press ESC key or click on ✕ button to close</p>
    
    <div className="mt-4 spacey-2 py-1">
        <span>username</span>
        <br />
        <input type="text" placeholder='naam bata bsdk' className='w-80 px-3 border rounded-md outline-none ' />
    </div>

    <div className="mt-4 spacey-2 py-1">
        <span>add a email</span>
        <br />
        <input type="email" placeholder='enter your email' className='w-80 px-3 border rounded-md outline-none ' />
    </div>
    <div className="mt-4 spacey-2 py-1">
        <span>create password</span>
        <br />
        <input type="password" placeholder='enter your password' className='w-80 px-3 border rounded-md outline-none ' />
    </div >
    <div className="flex justify-around mt-4 "> <button className='bg-lime-700 text-white rounded medium px-3 py-1 hover:bg-white hover:text-black duration-300'>Sign-up</button>

    <p className='text-md'>Something wrong! {" "}
        <Link to="/"
        className='underline text-yellow-500 cursor-pointer'
        onClick={
            ()=>document.getElementById("my_modal_3").showModal()
            }>home</Link>
            <Login />
    </p>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Signup