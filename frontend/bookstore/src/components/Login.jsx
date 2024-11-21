import React from 'react'
import {Link} from "react-router-dom" 

const Login = () => {
  return (
    <>
    <div className="">
    <dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">Login now</h3>
    <p className="py-4">Press ESC key or click on ✕ button to close</p>
    <div className="mt-4 spacey-2 py-1">
        <span>email</span>
        <br />
        <input type="email" placeholder='enter your email' className='w-80 px-3 border rounded-md outline-none ' />
    </div>
    <div className="mt-4 spacey-2 py-1">
        <span>password</span>
        <br />
        <input type="password" placeholder='enter your password' className='w-80 px-3 border rounded-md outline-none ' />
    </div >
    <div className="flex justify-around mt-4 "> <button className='bg-lime-700 text-white rounded medium px-3 py-1 hover:bg-white hover:text-black duration-300'>login</button>

    <p>not registered yet? {" "}
        <Link to="/Signup" 
        className='underline text-yellow-500 cursor-pointer'>
            signup now
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