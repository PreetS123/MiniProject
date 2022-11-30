import React,{ createContext, useContext, useReducer } from 'react';
import {faker} from '@faker-js/faker';
import { cartReducer,prodReducer } from './Reducer';

const Cart= createContext();


export const Context = ({children}) => {
   
    const products=[...Array(20)].map(()=>({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.fashion(734, 1345),
        inStock: faker.random.numeric(1),
        fastDelivery: faker.datatype.boolean(),
        ratings: faker.random.numeric(1),
    }))

    // console.log(products);

    const [state,dispatch]= useReducer(cartReducer,{
      products:products,
      cart:[]
    })
   

    const [prodstate,prodDispatch]= useReducer(prodReducer,{
      sort:'lowToHigh',
      byStock:false,
      byFastDelivery:false,
      byRating:0,
      serchQuerry:''
    })
    console.log(prodstate);

    

  return (
    <Cart.Provider value={{state,dispatch,prodstate,prodDispatch}}>
         {children}
    </Cart.Provider>
  )
}



  export const CartState=()=>{
    return useContext(Cart)
  }