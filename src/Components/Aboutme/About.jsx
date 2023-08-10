import React, { useEffect } from 'react';
import { Flex, Text, Heading, Button, Box, SimpleGrid } from '@chakra-ui/react';
import "./Aboutjs.css"
import { NavLink } from "react-router-dom";

import AOS from 'aos'
import 'aos/dist/aos.css';
const cardsData = [
    {
        title: 'Frontend.',
        description: 'Creating Interactive Frontend pages to full story telling experiences, I will help you move ideas around',
    },
    {
        title: 'Animated Interactions.',
        description: 'UX is only complete with engaging animations. These are great for showcase or to guide a dev team.',
    },
    {
        title: 'Backend Development',
        description: 'Bringing support to the system great bankend is a need, Together we can uplift it.',
    },
    {
        title: 'Education.',
        description: 'If you have a team ready to dive into the world of Animated sites and FullStack Development, I would be delighted to help.',
    },
];
const About = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    const handleDownload = () => {
        // Replace 'resume.pdf' with the correct path to your PDF file
        const fileURL = "./Resume.pdf";
        window.open(fileURL, '_blank');
    };



    return (
        <>
            <box>
                <Heading fontSize='3xl'
                    backgroundColor="#e6d422"
                    textAlign="justiy-center"
                    pt={{ base: '2rem', lg: "6rem" }}
                    pl={{ base: '2rem', lg: "10rem" }}
                    pr={{ base: '2rem', lg: "10rem" }}
                    pb={{ base: '2em', lg: "6rem" }}
                    fontFamily='Overpass'
                    lineHeight="180%"
                >
                    <Box
                        data-aos="fade-up"
                        data-aos-duration="800"
                    >

                        Hey, there! I’m a Full Stack Developer & Interaction Designer based in Maharashtra, India. I focus on creating interactive frontend and backend  development.
                    </Box>
                    <br />
                    <Button
                        id='moveButton'
                        className='btnal'
                        border="2px solid black"
                        color="black"
                        borderRadius="0%"
                        // onClick={handleDownload}
                        variant='outline' size='md'
                    >

                        <p>Download <a href="./Resume.pdf" download>Resume !</a></p>                    </Button>
                </Heading>
            </box >
            <section>


                <Box p={5}>
                    <br />
                    <br />
                    <Heading as="h3" size="xl" mb={0}
                        align={{ base: "center" }}
                        pl={{ base: '2rem', lg: "16.5rem" }}
                        data-aos="fade-left"
                        data-aos-duration="800"
                    >
                        Here’s  what I can
                        <br />
                        do to help:
                    </Heading>
                    <br />
                    <br />
                    <Flex justifyContent="center" p={4}>
                        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: "4", lg: "12" }} w={{ base: '100%', md: '80%', lg: '1000px' }}>
                            {cardsData.map((card, index) => (
                                <Box
                                    key={index}
                                    borderRadius="lg"
                                    p={4}
                                    // pr={{lg:"4rem"}}
                                    textAlign="center"
                                    minWidth={{ base: '100%', md: 'auto' }}
                                    width="100%"
                                >
                                    <Heading as="h4" size="lg" mb={4}
                                        align="left"
                                        fontWeight="400"
                                        color='red'
                                        fontFamily='REM'
                                        // font-family: 'REM'
                                        data-aos="fade-up"
                                        data-aos-duration="1000"
                                    >
                                        {card.title}
                                    </Heading>
                                    <Text
                                        align="left"
                                        fontFamily='REM'
                                        data-aos="fade-up"
                                        data-aos-duration="1200"
                                    // fontFamily='Roboto Mono'
                                    >{card.description}</Text>
                                </Box>
                            ))}
                        </SimpleGrid>
                    </Flex>
                </Box>
                <br />
                <br />
                <br />
            </section>
        </>
    )
}

export default About
