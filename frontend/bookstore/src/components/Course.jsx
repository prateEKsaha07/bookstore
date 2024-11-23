import React , { useEffect , useState } from 'react'
import Cards from './Cards'
import { Link } from 'react-router-dom'
import axios from "axios"

const Course = () => {
  const [book,setBook] = useState([])
  useEffect(() => {
    const getBook= async() =>{
      try {
       const res = await axios.get("http://localhost:4001/book");
       console.log(res.data)
       setBook(res.data)
      } catch (error) {
        console.log(error);
      }
    }
    getBook();
  },[])
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
    <div className="mt-28 items-center justify-center justify-center">
      <h1 className='text-2xl font-semibold md:text-4xl'>we are delighted to have you <span className='text-red-500'>here</span></h1>
      <p className='mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi similique eos, debitis repellendus repellat sequi non ipsa recusandae, obcaecati, ex voluptate eligendi aliquid quidem blanditiis accusamus quaerat error. Consequatur ducimus suscipit quos quisquam inventore beatae perferendis molestiae et eaque voluptatibus.</p>
      <Link to="/" >
      <button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-lime-700 duration-300 mt-6'>back</button>
      </Link>
      
    </div>
    <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
      {book.map(item => (
        <Cards key={item.id} item={item} />
      ))}
    </div>
    </div>
    </>
  )
}

export default Course