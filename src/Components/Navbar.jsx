import React from "react";
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
  Image,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { MdShoppingCart } from "react-icons/md";
import { CartState } from "../Context/Context";
import { AiFillDelete } from "react-icons/ai";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  // const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <>
      <Box
        bg={useColorModeValue("gray.500", "gray.900")}
        px={4}
        w={"100%"}
        color={useColorModeValue("blue.700", "blue.900")}
        fontWeight={900}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <NavLink to="/">Shopping Cart</NavLink>
          </Box>
          <Center w={"30%"}>
            <Input bg={"white"} placeholder="Search Your Product" />
          </Center>
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Box>
                <Button onClick={toggleColorMode}>
                  {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                </Button>
              </Box>

              <Menu>
                <MenuButton
                  as={Button}
                  bg={useColorModeValue("greenyellow", "green.200")}
                  cursor={"pointer"}
                  minW={50}
                  display={"flex"}
                >
                  <MdShoppingCart color={"white"} width={"30px"} />
                  <p>{cart.length}</p>
                </MenuButton>
                <MenuList alignItems={"center"} p={2} maxW={"370px"}>
                  {cart.length > 0 ? (
                    <>
                      {cart?.map((prod) => (
                        <Flex key={prod.id} align={"center"} justify="space-around">
                          <Image w={"40px"} src={prod.image} alt={prod.name} />
                          <Flex
                            gap={"5px"}
                            direction="column"
                            align="center"
                            fontSize={"10px"}
                          >
                            <p>{prod.name}</p>
                            <p>${Math.round(prod.price)}</p>
                          </Flex>
                          <AiFillDelete
                            width="20px"
                            style={{ cursor: "pointer" }}
                            onClick={() =>
                              dispatch({
                                type: "REMOVE_FROM_CART",
                                payload: prod,
                              })
                            }
                          />
                        </Flex>
                      ))}
                      <NavLink to="/cart">
                        <Button style={{ width: "95%", margin: "auto" }}>
                          Go To Cart
                        </Button>
                      </NavLink>
                    </>
                  ) : (
                    <p>Cart is Empty </p>
                  )}
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
