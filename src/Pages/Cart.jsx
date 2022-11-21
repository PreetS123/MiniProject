import { Box, Button, Flex, Heading, Image, Select, Text, VStack } from '@chakra-ui/react';
import React,{useState,useEffect} from 'react'
import { AiFillDelete } from 'react-icons/ai';
import { CartState } from '../Context/Context'

export const Cart = () => {

  const {state:{cart},dispatch,}= CartState();
  //  console.log(cart)
  const [total,setTotal]= useState();
    useEffect(()=>{
      
       setTotal(cart.reduce((acc,curr)=>
            acc+Number(curr.price)*curr.qty
       ,0));

    },[cart])

  return (
    <Flex gap={20} justify='space-between'  w={'100%'} p={4} >
      <VStack flex={3} gap='20px'  >
           {
            cart?.map(prod=>{
              return (
                <Flex key={prod.id} w='100%' align='center' justify='space-around' h='60px' gap='20px'  >
                    <Image h={'40px'} w={30} src={prod.image} atl={prod.name} />
                     <Text fontSize={'18px'}>{prod.name}</Text>
                     <Text>{prod.price}</Text>
                     <Select 
                     w={'30px'} 
                     value={prod.qty}
                     onChange={(e)=>
                    dispatch({
                      type:'CHANGE_CART_QTY',
                      payload:{
                        id:prod.id,
                        qty:e.target.value,
                      },
                    })}
                      >
                     {[...Array(prod.inStock).keys()].map((x) => (
                      <option key={x + 1}>{x + 1}</option>
                    ))}
                     </Select>
                     <Button
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: prod,
                      })
                    }
                  >
                    <AiFillDelete width="20px" />
                  </Button>
                </Flex>
              )
            })
           }
      </VStack>
      <VStack h={'500px'} flex={2} p={4} bg={'gray'} float={'right'}>
        <Box> 
           <Heading>Product Sumarry</Heading>
           </Box>
           <Box>
            <Text> SubTotal ({cart.length}) items </Text>
            <Text>Total: {total}</Text>
           </Box>

           <Button bg='blue.600' disabled={cart.length===0} >
            Proceed to checkout
           </Button>
      </VStack>
    </Flex>
  )
}
