import { Box, Grid, Heading, Flex, Button, Text, ChakraProvider, CSSReset } from '@chakra-ui/react';
// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css'
import React, { useState, useEffect } from 'react';


import LoaderContact from '../Loader/LoaderContact';

const Footer = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    if (loading) {
        return <LoaderContact />;
    }
    return (
        <div classname="container">
        <Box as="footer" bg="black" color="white" py={8}
        pl={{ base: '2rem' }}>
            <br />
            <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={8} maxWidth="1200px" mx="auto">
                <Box
                    pl={{ base: "", lg: "7rem" }}
                >
                    <Heading as="h3" size="xl" mb={{ base: "2", lg: "2" }}
                        data-aos="fade-left"
                        data-aos-duration="1000"                    >
                        Let's Build Something
                    </Heading>
                    <Heading color="crimson" as="h3" size="xl" mb={{ base: "4", lg: "8" }}
                        data-aos="fade-left"
                        data-aos-duration="1000"
                    >
                        together?
                    </Heading>
                    <br />
                    <Button
                        id='moveButton'
                        as="a" href="mailto:contact@example.com"
                        textDecoration="none"
                        className='btnal'
                        border="2px solid crimson"
                        color="white"
                        borderRadius="0%"
                        variant='outline'
                        size='md'>
                        Contact Me !
                    </Button>
                </Box>
                <Box>
                    <Heading as="h3" size="xl" mb={{ base: "2", lg: "2" }}
                        data-aos="fade-left"
                        data-aos-duration="1000"                    >
                        You can find me on Social                    </Heading>
                    <Heading color="yellow" as="h3" size="xl" mb={{ base: "4", lg: "8" }}
                        data-aos="fade-left"
                        data-aos-duration="1000"
                    >
                        media!
                    </Heading>
                    <br />
                    <br />
                    <Flex flexDirection="column">
                        <Text as="a" href="#" fontFamily='Roboto Mono'
                            className='socials'
                            lineHeight="7" fontFamily='Roboto Mono' isExternal color="white" textDecoration="none" mb={2}>
                            Linkedin
                        </Text>
                        <Text as="a" href="#" fontFamily='Roboto Mono'
                            className='socials'
                            lineHeight="7" fontFamily='Roboto Mono' isExternal color="white" textDecoration="none" mb={2}>
                            Twitter
                        </Text>
                        <Text as="a" href="#" fontFamily='Roboto Mono'
                            className='socials'
                            lineHeight="7" fontFamily='Roboto Mono' isExternal color="white" textDecoration="none" mb={2}>
                            Instagram
                        </Text>
                        <Text as="a" href="#" fontFamily='Roboto Mono'
                            className='socials'
                            lineHeight="7" fontFamily='Roboto Mono' isExternal color="white" textDecoration="none" mb={2}>
                            Github
                        </Text>

                    </Flex>
                </Box>
            </Grid>
            <br />
            <br />
            <br />

            <Text mt={8} textAlign="center" fontSize="sm" fontFamily='Roboto Mono'>
                Built by Shreyansh<br />
                Copyright @2023 Shreyansh Patil. All rights Reserved.
            </Text>
            <br />
            <br />
            <br />
            <br />
        </Box>
            </div>
    );
};

const App = () => {
    return (
        <ChakraProvider>
            <CSSReset />
            {/* Your other content */}
            <Footer />
        </ChakraProvider>
    );
};

export default App;
