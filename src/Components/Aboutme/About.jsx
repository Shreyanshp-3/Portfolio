import React, { useEffect } from 'react';
import { Center, Text, Heading, Button, Box, SimpleGrid } from '@chakra-ui/react';
import "./Aboutjs.css"
import AOS from 'aos'
import 'aos/dist/aos.css';
const cardsData = [
    {
        title: 'Motion Graphics.',
        description: 'From small teasers, to explainers, to full storytelling experiences, I will help you move ideas around.',
    },
    {
        title: 'Animated Interactions.',
        description: 'UX is only complete with engaging animations. These are great for showcase or to guide a dev team.',
    },
    {
        title: 'Webflow Development.',
        description: 'Bringing visual design, animation and development together to uplift your digital presence.',
    },
    {
        title: 'Education.',
        description: 'If you have a team ready to dive into the world of Motion Graphics, I would be delighted to help.',
    },
];
const About = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <>
            <box>
                <Heading fontSize='3xl'
                    backgroundColor="#e6d422"
                    textAlign="justiy-center"
                    pt="6rem"
                    pl="10rem"
                    pr="10rem"
                    pb="6rem"
                    fontFamily='Overpass'
                    lineHeight="180%"
                >
                    <Box
                        data-aos="fade-up"
                        data-aos-duration="800"
                    >

                        Hey, there! I’m a Motion & Interaction Designer based in Viseu, Portugal. I focus on animation and Webflow development.
                    </Box>
                    <br />
                    <Button
                        id='moveButton'
                        className='btnal'
                        border="2px solid black"
                        color="black"
                        borderRadius="0%"
                        variant='outline' size='md'>
                        View all Projects
                    </Button>
                </Heading>
            </box >
            <section>


            </section>
            <Box p={5}>
                <Center p={4}>
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={20}>
                        {cardsData.map((card, index) => (
                            <Box key={index} borderWidth="1px" border="none" borderRadius="lg" p={14}>
                                <Heading as="h3" size="lg" mb={2}>
                                    {card.title}
                                </Heading>
                                <Text>{card.description}</Text>
                            </Box>
                        ))}
                    </SimpleGrid>
                </Center>
            </Box>

        </>
    )
}

export default About