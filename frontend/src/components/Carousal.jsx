
import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const images=[
    {src:"/img/c1.jpg", id:1},
    {src:"/img/c2.jpg", id:2},
    {src:"/img/c3.jpg", id:3},
]


const Carousal = () => {
  return (
    <div className="flex">
         <Carousel
    stopOnHover={true}
    transitionTime={3}
    width={"100%"}
    autoPlay={true}
    infiniteLoop={true}
    centerMode={true}
    useKeyboardArrows={true}
    showArrows={true}
         >
          {images.map((img,index)=>(
                         <div className='banner   m-10 space-x-3' key={index.id}>
                         <img src={img.src} alt="" className='w-[50vw] z-10 'style={{width:"50vw"}}/>
                     </div>

          ))}
            </Carousel>
    </div>
  )
}

export default Carousal