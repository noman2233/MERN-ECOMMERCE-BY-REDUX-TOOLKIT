import React from 'react'
import Carousel from 'react-material-ui-carousel'

const images=[
    "https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg"
]


const MaterialUiaresoul = () => {
  return (
    <div>
         <Carousel
         className='-z-10 mb-5 '
         autoPlay={true}
         animation='slide'
         indicator={false}
         navButtonsAlwaysVisible={true}
         cycleNavigation={true}
         navButtonsWrapperProps={{
            style:{
                backgroundColor:"white",
                color:"black",
                borderRadius:0
            }
         }}
         >
          {images.map((img)=>(

            <img src={img} alt="" srcSet="" key={img} />
          ))}

        </Carousel>
    </div>
  )
}

export default MaterialUiaresoul