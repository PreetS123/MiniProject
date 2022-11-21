import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import styles from "../Styles/Home.module.css";
import { Ratings } from "./Ratings";
import { CartState } from "../Context/Context";

export const SingleProducts = ({ prod }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

   console.log('cart',cart);

  let rating;
  if (prod.ratings > 5) {
    rating = Math.abs(prod.ratings - 5);
  } else {
    rating = prod.ratings;
  }

  return (
    <div className={styles.products}>
      <Image
        h={{ base: "130px", md: "230px", lg: "330px" }}
        src={prod.image}
        alt={prod.name}
      />
      <Box className={styles.pbox}>
        <Text>{prod.name}</Text>
        <Text>${prod.price}</Text>
        {prod.fastDelivery ? (
          <Text>Fast Delivery</Text>
        ) : (
          <Text>10 days delivery</Text>
        )}
        <Flex>
          <Ratings rating={rating} />
        </Flex>
        <Flex gap="20px">
          {cart.some((p) => p.id === prod.id) ? (
            <Button
              color={"red.100"}
              varient={"solid"}
              bg={"maroon"}
              disabled={!prod.inStock}
              onClick={()=>{
                dispatch({
                  type:"REMOVE_FROM_CART",
                  payload:prod,
                })
              }}
            >
              Remove from cart
            </Button>
          ) : (
            <Button
              color={"blue.100"}
              varient={"solid"}
              bg={"blue"}
              disabled={!prod.inStock}
              onClick={()=>{
                dispatch({
                  type:"ADD_TO_CART",
                  payload:prod,
                })
              }}
            >
              {!prod.inStock ? "Out of Stock" : "Add To Cart"}
            </Button>
          )}
        </Flex>
      </Box>
    </div>
  );
};
