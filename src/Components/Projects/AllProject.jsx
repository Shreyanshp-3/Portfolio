import React, { useState, useEffect } from 'react';
import Footer from '../Footer/Footer';

import AOS from 'aos'
import 'aos/dist/aos.css';
import LoaderWork from '../Loader/LoaderWork'
import { Grid, Hide, GridItem, Box, Flex, Heading, Image, Text, VStack, HStack, SimpleGrid, Badge } from "@chakra-ui/react";
import './Allproject.css'
import a1 from './WorkVieo.mp4'
import a2 from './P1.jpg'
import a3 from './P44.png'
import a4 from './P3.jpg'
import a5 from './P4.jpg'

const AllProject = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <LoaderWork />;
  }
  return (
    <>
      <div className="container">

        <Grid templateColumns="repeat(6,1fr)" bg="black">
          <GridItem
            data-aos="fade-up"
            className='hidden'
            as="main"
            colSpan={{ base: 6, lg: 3, xl: 3 }}
            p={{ base: "1rem", md: "1rem 3rem 1rem 3rem", xl: "4rem" }}
            pb={{ base: "5rem" }}
          >
            <Box maxW='64rem'>
              <br />
              <br />
              <br />
              <br />
              <Text ml={{ base: "0rem", lg: "12rem" }} fontSize="5xl" fontWeight="700" color="white" mb="2" textAlign={{ base: "center", md: "left" }} top="40%"
                fontFamily='Roboto Mono'
                // data-aos="fade-up"
                data-aos-duration="1000"
              >
                What I've <br />
                been up to. <br />

              </Text>
              <br />
              <Text fontFamily='Roboto Mono' fontSize="l" ml={{ base: "0rem", lg: "12rem" }} pl="2" borderLeft="5px solid yellow" color="white" textAlign={{ base: "center", md: "left" }}
                data-aos="fade-up"
                data-aos-duration="1000">
                <span className='spans'
                  data-aos="fade-left"
                  data-aos-duration="1200"
                >
                  Work
                </span>
              </Text>
              <br />
              <br />

              <Text ml={{ base: "0rem", lg: "12rem" }} fontSize="l" color="white" textAlign={{ base: "center", md: "left" }}
                data-aos="fade-up"
                data-aos-duration="1000"
              >

                Here is a selection of projects that I've <br />
                worked on. <br />

              </Text>

            </Box>

          </GridItem>
          <Hide below='lg'>

            <GridItem
              className='hidden'
              data-aos="fade-up"
              as="main"
              width="100vw"
              height="100vh"
              colSpan={{ base: 6, lg: 3, xl: 3 }}
              p={{ base: "0rem", md: "1rem 3rem 1rem 3rem", xl: "0rem" }}
              pl={{ xl: "5rem" }}
              pt={{ lg: "7rem" }}
            >
              {/* <Box maxW={{ base: "26rem", md: "30rem", xl: "24rem" }}          > */}
              {/* <center> */}<br />
              {/* <center> */}<br />
              {/* <center> */}<br />
              {/* <center> */}<br />
              {/* <center> */}<br />
              {/* <center> */}<br />
              {/* <center> */}<br />
              {/* <center> */}<br />
              <video className="header-video" height="40%" width="40%" controls>
                <source src={a1} type="video/mp4" />
                {/* Optionally, you can provide alternative video formats for broader browser support */}
                {/* <source src={your_video.webm} type="video/webm" /> */}
                {/* <source src={your_video.ogv} type="video/ogg" /> */}
                Your browser does not support the video tag.
              </video>
              {/* </center> */}
              {/* </Box> */}
            </GridItem>
          </Hide>

        </Grid>

        <section className="projects">
          <Flex
            height="100vh"
            w="100vw"
            justifyContent="center"
            alignItems="center"
            background="gray.100"
            className='pp1'

          >
            <Box w="60%" h="70%" borderWidth="0px" borderRadius="lg" overflow="hidden" >
              <Image
                src={a5}
                alt="Image"
                h={{base:"30%",lg:"70%"}}
                w={{base:"100%",lg:"100%"}}
                objectFit="cover"
                data-aos="fade-up"
                data-aos-duration="1000"
              />
              <Box p="6">
                <Heading as="h3" size="lg" color="purple" mb="2" fontFamily='Roboto Mono'
                  className='ww1'
                  data-aos="fade-right"
                  data-aos-duration="1000"
                >
                  MyHealth Diary
                </Heading>
                <Text data-aos="fade-right" data-aos-duration="2500"
                  fontSize="md">Open ai and Framer Motion</Text>
              </Box>
            </Box>
          </Flex>
          <Flex
            height="100vh"
            w="100vw"
            justifyContent="center"
            alignItems="center"
            background="gray.100"
            className='pp1'
          >
            <Box w="60%" h="70%" borderWidth="0px" borderRadius="lg" overflow="hidden" >
              <Image
                src={a2}
                alt="Image"
                h={{base:"30%",lg:"70%"}}
                w="100%"
                objectFit="cover"
                data-aos="fade-up"
                data-aos-duration="1000"
              />
              <Box p="6">
                <Heading as="h3" size="lg" color="Crimson" mb="2" fontFamily='Roboto Mono'
                  className='ww1'
                  data-aos="fade-right"
                  data-aos-duration="1000"
                >
                  Myfitness Gallery
                </Heading>
                <Text fontSize="md" data-aos="fade-right"
                  data-aos-duration="2500">Project using Rapid API</Text>
              </Box>
            </Box>
          </Flex>
          <Flex
            height="100vh"
            w="100vw"
            justifyContent="center"
            alignItems="center"
            background="gray.100"
            className='pp1'
          >
            <Box w="60%" h="70%" borderWidth="0px" borderRadius="lg" overflow="hidden" >
              <Image
                src={a4}
                alt="Image"
                h={{base:"30%",lg:"70%"}}
                w="100%"
                objectFit="cover"
                data-aos="fade-up"
                data-aos-duration="1000"
              />
              <Box p="6">
                <Heading as="h3" size="lg" color="blue.400" mb="2" fontFamily='Roboto Mono'
                  className='ww1'
                  data-aos="fade-right"
                  data-aos-duration="1000"
                >
                  Expense Tracker
                </Heading>
                <Text data-aos="fade-right"
                  data-aos-duration="2500" fontSize="md">Mern Stack</Text>
              </Box>
            </Box>
          </Flex>
          <Flex
            height="100vh"
            w="100vw"
            justifyContent="center"
            alignItems="center"
            background="gray.100"
            className='pp1'
          >
            <Box w="60%" h="70%" borderWidth="0px" borderRadius="lg" overflow="hidden" >
              <Image
                src={a3}
                alt="Image"
                h={{base:"30%",lg:"70%"}}
                w="100%"
                objectFit="cover"
                data-aos="fade-up"
                data-aos-duration="1000"
              />
              <Box p="6">
                <Heading as="h3" size="lg" color="orange.400" mb="2" fontFamily='Roboto Mono'
                  className='ww1'
                  data-aos="fade-right"
                  data-aos-duration="1000"
                >
                  SuperCook Deliciousss
                </Heading>
                <Text data-aos="fade-right"
                  data-aos-duration="2500" fontSize="md">Project using Rapid API with Framer motion animation</Text>
              </Box>
            </Box>
          </Flex>

        </section>
        <Footer />
      </div>
    </>
  )
}

export default AllProject
