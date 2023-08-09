import React, { useState, useEffect } from 'react';
import LoaderAboutMe from '../Loader/LoaderAboutme';
import { Grid, Hide, GridItem, Box, Flex, Heading, Image, Text, VStack, HStack, SimpleGrid, Badge } from "@chakra-ui/react";
import Footer from '../Footer/Footer';
import a1 from './setup.webp'
import a2 from './pcpc.jpg'
import './Aboutjs.css'

import p1 from './1.webp'
import p2 from './2.jpg'
import p3 from './3.jpg'
import p4 from './4.jpg'


import AOS from 'aos'
import 'aos/dist/aos.css';
const AboutMe = () => {
  const cardsData = [
    {
      title: 'Collaboration.',
      description: 'I work with you from the very beginning to the final tweaks.',
    },
    {
      title: 'Organization.',
      description: 'Planning all the steps is a key part of the design process.',
    },
    {
      title: 'Humour.',
      description: 'Work with what you love and you’ll always have a smile on your face.',
    },
    {
      title: 'Precision.',
      description: 'A project’s success can be determined by small details.',
    },
    {
      title: 'Responsibility.',
      description: 'While a design-driven vision is crucial, delivery is also a key factor.',
    },
    {
      title: 'Going beyond.',
      description: 'Sometimes, what you ask for and what you need are different things.',
    },
  ];
  // import imgad from "./pcpic.jpg"
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
    return <LoaderAboutMe />;
  }
  return (
    <>
      <div className="borders">

        {/* <Image src={a1} alt="my photo" h="100%" w="80%" objectFit="cover" /> */}
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
                A developer <br />
                & gamer <br />
                at heart.
              </Text>
              <br />
              <Text fontFamily='Roboto Mono' fontSize="l" ml={{ base: "0rem", lg: "12rem" }} pl="2" borderLeft="5px solid yellow" color="white" textAlign={{ base: "center", md: "left" }}
                data-aos="fade-up"
                data-aos-duration="1000">
                <span className='spans'
                  data-aos="fade-left"
                  data-aos-duration="1200"
                >
                  About me
                </span>
              </Text>
              <br />
              <br />

              <Text ml={{ base: "0rem", lg: "12rem" }} fontSize="l" color="white" textAlign={{ base: "center", md: "left" }}
                data-aos="fade-up"
                data-aos-duration="1000"
              >

                My name is Shreyansh Patil <br />
                "I embody the prowess of a full-stack virtuoso <br />
                with a mastery of front-end brilliance." <br />

              </Text>

            </Box>

          </GridItem>
          <Hide below='lg'>

            <GridItem
              className='hidden'
              data-aos="fade-up"
              as="main"
              colSpan={{ base: 6, lg: 3, xl: 3 }}
              p={{ base: "0rem", md: "1rem 3rem 1rem 3rem", xl: "0rem" }}
              pl={{ xl: "5rem" }}
            >
              <Box maxW={{ base: "26rem", md: "30rem", xl: "24rem" }}


              >
                <center>
                  <img className="header-img" backgroundColor="black" height="20rem" widht="30rem" src={a1} alt="image_food" />
                </center>
              </Box>
            </GridItem>
          </Hide>

        </Grid>
        <section className="heading2">
          <Heading
            fontWeight="extrabold" size="lg"
            letterSpacing="10" mb={0}
            align={{ base: "center" }}
            pt={{ base: "2rem", lg: "5rem" }}
            pl={{ base: '2rem', lg: "16.5rem" }}
            backgroundColor="white"
            textColor="black"
            // fontFamily='REM'
            fontFamily='Roboto Mono'
            data-aos="fade-left"
            data-aos-duration="800"
          >
            Know more about
            <br />
            my expertise.
          </Heading>
          <br />
          <br />
          <br />
          <br />
        </section>
        <section className="new">
          <Flex>
            <Hide below='lg'>

              <Box
                w="44%"
                // h="100vh"
                borderRadius="md"
              >

                {/* <center> */}
                <img data-aos="fade-right"
                  data-aos-duration="1000" className="header-img2" height="60rem" width="70%" src={a2} alt="image_food" />
                {/* </center> */}
              </Box>
            </Hide>
            <Box
              w={{ base: "100%", lg: "56%" }}
              // ml="-10%"
              mt="-5%"
              borderRadius="md"
            >
              <Box maxW='32rem'
                p={{ base: "2rem" }}>
                <Text fontSize="2xl" fontFamily='Roboto Mono'
                  color="crimson"
                  mb={6} data-aos="fade-up"
                  data-aos-duration="1000">Full Stack.</Text>
                <Text
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  lineHeight="8" fontFamily='REM'
                  fontSize="1.2rem"
                >
                  From small teasers, to explainers, to full storytelling experiences, I will help you move ideas around. I put graphics, characters and brand environments in motion with perfect backend support and  communication goals in mind.
                </Text>

              </Box>
              <br />
              <br />
              <br />
              <Box maxW='32rem'
                p={{ base: "2rem" }}

              >
                <Text fontSize="2xl" fontFamily='Roboto Mono'
                  color="crimson"
                  mb={6} data-aos="fade-up"
                  data-aos-duration="1000">Web UI/UX.</Text>
                <Text
                  lineHeight="8" fontFamily='REM'
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  fontSize="1.2rem"
                >
Certainly! My expertise lies in providing guidance and insights related to UI/UX design principles, best practices, and trends for creating engaging and user-friendly web interfaces.                 </Text>

              </Box>
              <br />
              <br />
              <br />
              <Box maxW='32rem' p={{ base: "2rem" }}
              >
                <Text fontSize="2xl" fontFamily='Roboto Mono'
                  color="crimson"
                  mb={6}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  Education</Text>
                <Text
                  lineHeight="8" fontFamily='REM'
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  fontSize="1.2rem"
                >
Passing on knowledge is one of the things I love most in this industry. I can help you get started on your Motion Graphics adventure or, if you already have the basics checked, find the best way to develop your animation skills.                </Text>

              </Box>

              <br />
              <br />
              <br />
              <Box maxW='32rem' p={{ base: "2rem" }}
              >
                <Text fontSize="2xl" fontFamily='Roboto Mono'
                  color="crimson"
                  mb={6}
                  data-aos="fade-up"
                  data-aos-duration="1000">Future Technology</Text>
                <Text
                  lineHeight="8"
                  // fontSize='lg'
                  fontFamily='REM'
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  fontSize="1.2rem"
                >
I'm embarking on a journey into the fascinating realms of blockchain and Web 3.0 technologies, ready to explore new frontiers beyond the confines of Web 2.0.                </Text>

              </Box>
              <br />
              <br />
              <br />
            </Box>
          </Flex >
        </section >
        <section className='aboutcards'>

          <Box p={5}>
            <br />
            <br />
            <Heading as="h3" size="xl" mb={0}
              align={{ base: "center" }}
              pl={{ base: '2rem', lg: "16.5rem" }}
              data-aos="fade-left"
              data-aos-duration="800"
              fontFamily='Roboto Mono'
            >
              What you can also
              <br />
              except from me:
            </Heading>
            <br />
            <br />
            <Flex justifyContent="center" p={4}>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: "4", lg: "12" }} w={{ base: '100%', md: '80%', lg: '1000px' }}>
                {cardsData.map((card, index) => (
                  <Box
                    key={index}
                    borderRadius="lg"
                    p={5}
                    ml={{ lg: "4rem" }}
                    pr={{ lg: "7rem" }}
                    textAlign="center"
                    minWidth={{ base: '100%', md: 'auto' }}
                    width="100%"
                  >
                    <Heading as="h4" size="lg" mb={4}
                      align="left"
                      fontWeight="400"
                      color='crimson'
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
            <br />
            <br />
            <br />
          </Box>
        </section>
        <section className="personal">
          <Box p={5}
            backgroundColor="#e5e5e5">
            <br />
            <br />

            <Heading as="h3" size="xl" mb={0}
              align={{ base: "center" }}
              pl={{ base: '2rem', lg: "16.5rem" }}
              data-aos="fade-left"
              data-aos-duration="800"
              fontFamily='Roboto Mono'
              // data-aos="fade-up"
              // data-aos-duration="1200"
              fontSize="2rem"
            >
              When I’m not<br />
              working, I’m doing<br />
              something else.<br />
            </Heading>
            <br />
            <br />
            <Flex flexWrap="wrap"
              pl={{ lg: "20rem" }}
              pb={{ lg: "-5rem" }}
            >
              <Box w="25rem" h="25rem"
                data-aos="zoom-in-right"
                data-aos-duration="1400"
              >
                <img src={p1} className='ga' alt="Image 1" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </Box>
              <Box w="25rem" h="25rem"
                data-aos="zoom-in-right"
                data-aos-duration="1400"
                ml={{ lg: "5rem" }}
                mt={{ lg: "15rem" }}

              >
                <img src={p2} className='ga' alt="Image 1" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </Box>
              <Box w="25rem" h="25rem"
                mt={{ lg: "-10rem" }}
                data-aos="zoom-in-right"
                data-aos-duration="1400"

              >
                <img src={p3} alt="Image 1" className='ga' style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </Box>
              <Box w="25rem" h="25rem"
                ml={{ lg: "5rem" }}
                mt={{ lg: "5rem" }}
                data-aos="zoom-in-right"
                data-aos-duration="1400"

              >
                <img src={p4} alt="Image 1" className='ga' style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </Box>


            </Flex>

            <br />
            <br />
            <br />
          </Box >
          <Footer />

        </section >
      </div>
    </>
  )
}
export default AboutMe
