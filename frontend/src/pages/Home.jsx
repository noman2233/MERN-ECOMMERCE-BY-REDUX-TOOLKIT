import React, { useEffect } from 'react'
import Categories from '../components/Categories'
import Banner1 from '../components/Banner1'
import MaterialUiaresoul from '../components/MaterialUiaresoul'
import ProductSlide from '../components/ProductSlide'
import FeaturedProducts from '../components/FeaturedProducts'
// import { getProducts } from '../redux/actions/action';
// import { useSelector, useDispatch } from "react-redux";


const Home = () => {


  // const { products } = useSelector(state => state.getproductsdata);


  // const dispatch = useDispatch();

  // useEffect(() => {
  //     dispatch(getProducts());
  // }, [dispatch])

  return (
   <>
      
        <MaterialUiaresoul/>
        <ProductSlide/>
        <Banner1/>
        <Categories/>
        <FeaturedProducts />
        {/* <FeaturedProducts products={products.splice(4,4)}/> */}

   </>
    
  )
}

export default Home