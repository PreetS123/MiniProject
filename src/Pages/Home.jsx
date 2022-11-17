import React from 'react'
import { SingleProducts } from '../Components/SingleProducts';
import { CartState } from '../Context/Context';
import styles from '../Styles/Home.module.css';


export const Home = () => {
   const {state:{products}}=CartState();



   console.log(products);


  return (
    <div className={styles.home}>
      {/* <Filters/> */}

      <div className={styles.productContainer}>
        {
          products.map((prod)=>{
            return <SingleProducts key={prod.id} prod={prod} />
          })
        }
      </div>
    </div>
  )
}
