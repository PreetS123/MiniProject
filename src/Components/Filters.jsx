import {
  Box,
  Button,
  Checkbox,
  Flex,
  Radio,
  RadioGroup,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { CartState } from "../Context/Context";
import styles from "../Styles/Filter.module.css";
import { Ratings } from "./Ratings";

export const Filters = () => {
  const {
    prodstate: {sort, byStock, byFastDelivery, byRating },
    prodDispatch,
  } = CartState();
  // console.log(byStock, byFastDelivery, byRating, serchQuerry);

  return (
    <div className={styles.filters}>
      <Text
        fontSize={{ base: "12px", md: "19px", lg: "30px" }}
        fontWeight={500}
      >
        Filter Products
      </Text>

      <RadioGroup name="group1">
        <VStack spacing={5}>
          <Radio
            fontSize={{ base: "10px", md: "15px", lg: "20px" }}
            fontWeight={500}
            size="lg"
            colorScheme="orange"
            value="asc"
            onChange={()=>
            prodDispatch({
              type:'SORT_BY_PRICE',
              payload:'lowToHigh'
            })}
            checked={sort==='lowToHigh'?true:false}
          >
            Ascending
          </Radio>
          <Radio
            fontSize={{ base: "10px", md: "15px", lg: "20px" }}
            fontWeight={500}
            size="lg"
            colorScheme="orange"
            value="desc"
            onChange={()=>
              prodDispatch({
                type:'SORT_BY_PRICE',
                payload:'highToLow'
              })}
              checked={sort==='HighToLow'?true:false}
          >
            Descending
          </Radio>
        </VStack>
      </RadioGroup>

      <VStack spacing={5}>
        <Checkbox
          fontSize={{ base: "10px", md: "15px", lg: "20px" }}
          fontWeight={500}
          size="md"
          colorScheme="green"
          onChange={()=>
            prodDispatch({
              type:'FILTER_BY_STOCK',
            })}
            checked={byStock}
        >
          InStock Products
        </Checkbox>
        <Checkbox
          fontSize={{ base: "10px", md: "15px", lg: "20px" }}
          fontWeight={500}
          size="md"
          colorScheme="green"
          onChange={()=>
            prodDispatch({
              type:'FILTER_BY_DELIVERY',
            })}
            checked={byFastDelivery}
        >
          Fast Dilivery Only
        </Checkbox>
      </VStack>
      <Flex>
        <label
          fontSize={{ base: "10px", md: "15px", lg: "20px" }}
          fontWeight={500}
          style={{ paddingRight: "10px" }}
        >
          Ratings:
        </label>
        <Ratings
          style={{ cursor: "Pointer" }}
          onClick={(i) =>
            prodDispatch({
              type: "FILTER_BY_RATING",
              payload: i + 1,
            })
          }
          rating={byRating}
        />
      </Flex>
      <Box>
        <Button
          w={{ base: "80%", md: "60%", lg: "40%" }}
          fontWeight={900}
          fontSize={20}
          p={2}
          varient="solid"
          bg={"white"}
          color="#343a40"
          onClick={()=>
            prodDispatch({
              type:'CLEAR_FILTER',
            })}
        >
          Clear
        </Button>
      </Box>
    </div>
  );
};
