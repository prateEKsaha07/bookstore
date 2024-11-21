import React from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import list from "../../public/List.json"
import Cards from './Cards';

const Freebook = () => {

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

    const filterData = list.filter((data) => data.category === "free");
    console.log(filterData);

  return (
    <>
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4  ">
           <div className=""> <h1 className='font-bold text-xl pb-2 mt-4'>our free courses are</h1>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi mollitia officia voluptatum, laborum neque praesentium quae qui maiores officiis incidunt voluptatibus sint pariatur animi.</p></div>
       
        <div className="max-w-screen-2xl container mx-auto md:py-20 px-4 ">

{/* we use props (properties) to transfer a data from parent class to child class 
props allows components to be dynamic and flexible , once they receive different data and render accordingly */}

        <Slider {...settings}>
        {filterData.map((item) => (
            <Cards item={item} key={item.id}  />
        ))}

      </Slider>
        </div>
    </div>
    </>
  )
}

export default Freebook