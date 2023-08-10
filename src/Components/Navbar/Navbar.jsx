import React, { useEffect } from "react";
import {

    Flex,
    Button,
    Text,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    IconButton,
    useDisclosure,
    SlideFade,



} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import AOS from 'aos'
import 'aos/dist/aos.css';
import { NavLink } from "react-router-dom";
const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <>
            <Flex
                as="nav"
                align="center"
                justify="space-between"
                padding="1rem"
                bg="black"
                color="white"
                pl="100"
                pr="100"
            >
                <Text fontSize="xl" fontWeight="bold" fontFamily='Roboto Mono'
                >
                <NavLink
                    p={{base:"1rem"}}
                    className="nav-link" to="/">sp</NavLink>
                </Text>
                <Text fontSize="xl" fontWeight="bold" fontFamily='Roboto Mono'
                >
                    portfolio
                </Text>
                <IconButton
                    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    size="md"
                    fontSize="xl"
                    variant="unstyled"
                    aria-label="Toggle Sidebar"
                    onClick={isOpen ? onClose : onOpen}
                />
            </Flex>

            {/* Sidebar/Navbar */}
            <SlideFade in={isOpen} offsetY="20px" unmountOnExit transition={{ duration: 5 }}>
                <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
                    <DrawerOverlay />
                    <DrawerContent colorscheme="yellow">
                        <Flex direction="column"
                            alignItems={{ base: "none", lg: "center" }}

                        >

                            <Flex direction="row"
                                alignItems={{ base: "none", md: "center" }}

                            >
                                <DrawerHeader borderBottomWidth="1px" fontFamily='Roboto Mono'

                                >

                                    <Button data-aos="fade-down-right" data-aos-duration="1500"
                                        variant="ghost" color="gray.700" size="lg" w="full" mt="2" mr="2">
                                        <NavLink className="nav-link" to="/">Home</NavLink>

                                    </Button>
                                    <Button data-aos="fade-down-right" data-aos-duration="1500"
                                        variant="ghost" color="gray.700" size="lg" w="full" mt="2" mr="2">
                                        <NavLink className="nav-link" to="/work">Work</NavLink>

                                    </Button>
                                    <Button data-aos="fade-down-right" data-aos-duration="1500"
                                        variant="ghost" color="gray.700" size="lg" w="full" mt="2" mr="2">
                                        <NavLink className="nav-link" to="/about">About</NavLink>

                                    </Button>
                                    <Button data-aos="fade-down-right" data-aos-duration="1500"
                                        variant="ghost" color="gray.700" size="lg" w="full" mt="2" mr="2">
                                        <NavLink className="nav-link" to="/contact">Contact</NavLink>

                                    </Button>


                                </DrawerHeader>
                                <DrawerBody
                                    ml={{ lg: "14.5rem" }}
                                >

                                    {/* Add your sidebar content here */}
                                    <Flex justify="space-between"
                                    // alignContent="center"
                                    >

                                        <Flex direction="column"
                                            textAlign={{ base: "center", lg: "center" }}
                                        >
                                            <Text fontSize={{ base: "xl", lg: "3xl" }} fontWeight="bold" fontFamily='Roboto Mono'
                                                data-aos="fade-left"
                                                // data-aos-offset="300"
                                                data-aos-duration="1000"
                                            >
                                                Let's find solutions
                                                together?
                                            </Text>
                                            <br></br>
                                            <Text mt="2" color="gray.700"
                                                data-aos="fade-up"
                                                data-aos-duration="1200"
                                                data-aos-easing="ease-in-sine"

                                            >
                                                Use my contacts below you need to put a project on the move, let’s work on it!
                                                <br />
                                                <br />
                                                <Button data-aos="fade-up" data-aos-duration="1500"
                                                    colorScheme='gray.500' variant='outline' size='md'>
                                                    <NavLink className="nav-link" to="/contact">Contact</NavLink>
                                                </Button>
                                            </Text>

                                        </Flex>
                                        <IconButton
                                            // alignItems={{ base: "center", lg: "center" }}

                                            aria-label="Close Sidebar"
                                            icon={<CloseIcon />}
                                            onClick={onClose}
                                        />
                                    </Flex>
                                </DrawerBody>
                            </Flex>
                        </Flex>
                    </DrawerContent>
                </Drawer >
            </SlideFade >



        </>
    );
};

export default Navbar;
