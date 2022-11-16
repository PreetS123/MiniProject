import React from 'react';
import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Input,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { MdShoppingCart } from "react-icons/md";

export const Navbar=()=> {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('gray.500', 'gray.900')} px={4} w={'100%'} color={useColorModeValue('blue.700','blue.900')} fontWeight={900}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box >Shopping Cart</Box>
            <Center w={'30%'} >
                <Input bg={'white'} placeholder='Search Your Product' />
            </Center>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              
              
             <Box>
             <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
             </Box>

              <Menu>
                <MenuButton
                  as={Button}
                  bg={useColorModeValue('greenyellow','green.200')}
                  cursor={'pointer'}
                  minW={0}>
                   <MdShoppingCart color={'white'} fontSize={30}/>
                </MenuButton>
                <MenuList alignItems={'center'} p={2}  maxW={'370px'}>
                    {<p>Cart is Empty </p>}
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}