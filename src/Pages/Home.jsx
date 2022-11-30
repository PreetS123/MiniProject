import React from 'react'
import { Filters } from '../Components/Filters';
import { SingleProducts } from '../Components/SingleProducts';
import { CartState } from '../Context/Context';
import styles from '../Styles/Home.module.css';


export const Home = () => {
  const {
    state: { products },
    productState: { sort, byStock, byFastDelivery, byRating, searchQuery },
  } = CartState();

  const transformProducts = () => {
    let sortedProducts = products;

    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }

    if (!byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.inStock);
    }

    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
    }

    if (byRating) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.ratings >= byRating
      );
    }

    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery)
      );
    }

    return sortedProducts;
  };



   console.log(transformProducts())
  return (
    <div className={styles.home}>
      <Filters/>

      <div className={styles.productContainer}>
      {transformProducts().map((prod) => (
          <SingleProducts prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  )
}
