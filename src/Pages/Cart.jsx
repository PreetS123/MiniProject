import { Box, Flex, HStack, Image, Select, Text } from '@chakra-ui/react';
import React from 'react'
import { CartState } from '../Context/Context'

export const Cart = () => {

  const {state:{cart},dispatch,}= CartState();


  return (
    <Box>
      <HStack>
           {
            cart?.map(prod=>{
              return (
                <Flex>
                    <Image src={prod.image} atl={prod.name} />
                     <Text>{prod.name}</Text>
                     <Select defaultValue='1' >
                      <option value='1'>1</option>
                      <option value='2'>2</option>
                      <option value='3'>3</option>
                     </Select>
                </Flex>
              )
            })
           }
      </HStack>
      <HStack>

      </HStack>
    </Box>
  )
}
