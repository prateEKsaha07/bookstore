import React from 'react'
import banner from "../../public/book.jpg"

const Banner = () => {
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row ">
     <div className="order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32">
        <h1 className='text-4xl front-bold space-y-12 '>Lorem ipsum dolor sit amet consectetur, iure provident laboriosam 
        <span className="text-pink-500">learn new everyDAY</span>
        </h1>
        <p className='text-xl py-6 '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ratione quia impedit placeat. Exercitationem, cumque, enim animi commodi saepe fugiat laborum voluptas voluptatum esse et culpa tempore nesciunt. Nihil, officia.
        </p>


<div className="space-y-7 mx-auto ">

{/* email input box */}
     <label className="input input-bordered flex items-center gap-2 p-3">
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input type="text" className="grow" placeholder="Email" />
</label>

{/* the button */}
<button className="btn btn-outline btn-secondary">Secondary</button>

</div>
     </div>

     {/* the right side of the banner */}
     <div className=" order-1 w-full md:w-1/2">
        <img src={banner} className=" w-90 h-92 p-3 mt-7" alt="" />
     </div>
     </div>
    </>
  )
}

export default Banner