import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import Cards from './Cards';

function Freebook () {

  const [book,setBook] = useState([]);
  useEffect(() => {
    const getBook= async () =>{
      try {
       const res = await axios.get("http://localhost:4001/book");
       
       const data = res.data.filter((data) => data.category === "free");

       console.log(data)
       setBook(data)
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  },[]);

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <>
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4  ">
           <div className=""> 
            <h1 className='font-bold text-xl pb-2 mt-4'>our free courses are</h1>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi mollitia officia voluptatum, laborum neque praesentium quae qui maiores officiis incidunt voluptatibus sint pariatur animi.</p></div>
       
        <div className="max-w-screen-2xl container mx-auto md:py-20 px-4 ">

  {/* we use props (properties) to transfer a data from parent class to child class 
  props allows components to be dynamic and flexible , once they receive different data and render accordingly */}

        <Slider {...settings}>
          {book.map((item) => (
            <Cards item={item} key={item.id}  />
          ))}
      </Slider>
        </div>
    </div>
    </>
  );
}
export default Freebook;