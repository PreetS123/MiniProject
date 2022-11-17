import React from 'react'
import { SingleProducts } from '../Components/SingleProducts';
import { CartState } from '../Context/Context';


export const Home = () => {
   const {state:{products}}=CartState();



   console.log(products);


  return (
    <div className='home'>
      {/* <Filters/> */}

      <div className="productContainer">
        {
          products.map((prod)=>{
            return <SingleProducts key={prod.id} prod={prod} />
          })
        }
      </div>
    </div>
  )
}
