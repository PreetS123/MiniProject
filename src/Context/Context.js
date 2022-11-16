import React,{ createContext } from 'react';
import {faker} from '@faker-js/faker';

const Cart= createContext();


export const Context = ({children}) => {
   
    const products=[...Array(20)].map(()=>({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price('$'),
        image: faker.image.fashion(734, 1345),
        inStock: faker.random.numeric(1),
        fastDelivery: faker.datatype.boolean(),
        ratings: faker.random.numeric(1),
    }))

    console.log(products);

  return (
    <Cart.Provider>
         {children}
    </Cart.Provider>
  )
}
