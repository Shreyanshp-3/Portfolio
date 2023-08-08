import React, { useState, useEffect } from 'react';
import {

  Hide,
  Center,
  IconButton,
  Button,
  Flex,
  Box,
  Image,
  Text,
  Card,
  CardBody,
  Stack,
  Heading,
  Divider,

} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

// page
import Loader from '../Loader/Loader'; // Import the Loader component
import './HomePage.css';
// import Card from './Card.jsx';
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

import a1 from './P1.jpg'
import a2 from './P44.png'
import a3 from './P3.jpg'
import a4 from './P4.jpg'

// the animation import
import AOS from 'aos'
import 'aos/dist/aos.css';
import About from '../Aboutme/About';
import Footer from '../Footer/Footer';

const Homepage = () => {

  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [
    {
      imageUrl: a1,
      title: "Myfitness Gallery",
      description: "Project using Rapid API",
      description1: "User can get different types of Exercise accoring to requirnmment that can be by Target Muscele or Avaliable Equipment",
    },
    {
      imageUrl: a4,
      title: "MyHealth Diary",
      description: "Open ai and Framer Motion",
      description1: "I'm thrilled to unveil My Health Diary website, designed to help you achieve, maintain your health and wellness goals like never before.",
    },
    {
      imageUrl: a3,
      title: "Budget Planner Site",
      description: "Mern Stack",
      description1: "A Basic Budget planner where you can set budget and the enter all the expenses and list all them and get regarding information",
    },
    {
      imageUrl: a2,
      title: "SuperCook Deliciousss",
      description: "Project using Rapid API with Framer motion animation",
      description1: "Recipe Site with an API, Which gives us the Food recipes with by searching items, We receive the Recipes and other details",
    },

  ];

  const cards = [
    {
      imageUrl: a1,
      title: "Myfitness Gallery",
      description: 'Project using Rapid API',
      description1: "User can get different types of Exercise accoring to requirnmment that can be by Target Muscele or Avaliable Equipment",

    },
    {
      imageUrl: a4,
      title: "MyHealth Diary",
      description: "Open ai and Framer Motion",
      description1: "I'm thrilled to unveil My Health Diary website, designed to help you achieve, maintain your health and wellness goals like never before.",
    },
    {
      imageUrl: a3,
      title: "Budget Planner Site",
      description: "Mern Stack",
      description1: "A Basic Budget planner where you can set budget and the enter all the expenses and list all them and get regarding information",
    },
    {
      imageUrl: a2,
      title: "SuperCook Deliciousss",
      description: "Project using Rapid API with Framer motion animation",
      description1: "Recipe Site with an API, Which gives us the Food recipes with by searching items, We receive the Recipes and other details",
    },
  ]



  const handlePrevSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init();
  }, []);
  // for automatically scrolling of that slides
  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [activeSlide]);

  // Initialize AOS on component mount


  // for the loader function
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <div classname="container"
      <Hide below='lg'>
        <Center height="100vh" bg="black">
          <Box position="relative" width="100%">
            <Flex
              width="100%"
              transform={`translateX(-${activeSlide * 100}%)`}
              transition="transform 0.3s ease-in-out"
            >
              {slides.map((slide, index) => (
                <Box
                  key={index}
                  flex={{ base: "1", md: "0 0 100%" }}
                  height="300px"
                  display="flex"
                  alignItems="center"
                  flexDirection={{ base: "column", md: "row" }}
                  className={activeSlide === index ? "activeSlide" : "inactiveSlide"}

                >
                  <Box flex={{ base: "0 0 100%", md: "0 0 50%" }} pl={{ base: "0", md: "4" }}
                    p="4"
                    m="5"
                    alignItems="left"
                  >


                    <Text ml="16rem" fontSize="6xl" fontWeight="700" color="white" mb="2" textAlign={{ base: "center", md: "left" }} top="40%"
                      fontFamily='Roboto Mono'
                      data-aos="fade-up"
                      data-aos-duration="1000"
                    >
                      {slide.title}
                    </Text>

                    <Text fontFamily='Roboto Mono' fontSize="l" ml="16rem" pl="2" borderLeft="5px solid yellow" color="white" textAlign={{ base: "center", md: "left" }}
                      data-aos="fade-up"
                      data-aos-duration="1000">
                      <span className='spans'
                        data-aos="fade-up"
                        data-aos-duration="1000"
                      >
                        {slide.description}
                      </span>
                    </Text>
                    <br />
                    <br />

                    <Text ml="16rem" fontSize="l" color="white" textAlign={{ base: "center", md: "left" }}
                      data-aos="fade-up"
                      data-aos-duration="1000"
                    >

                      {slide.description1}

                    </Text>

                  </Box>
                  <Box flex={{ base: "0 0 100%", md: "0 0 50%" }} pr={{ base: "0", md: "10" }}>
                    <Image className='pp1' src={slide.imageUrl} alt={slide.title} h="100%" w="80%" objectFit="cover" />
                  </Box>

                </Box>
              ))}
            </Flex>
            <IconButton
              aria-label="Previous Slide"
              icon={<ChevronLeftIcon />}
              position="absolute"
              left="10%"
              top="50%"
              transform="translateY(-50%)"
              onClick={handlePrevSlide}
              colorScheme="whiteAlpha"
            />
            <IconButton
              aria-label="Next Slide"
              icon={<ChevronRightIcon />}
              position="absolute"
              right="5%"
              top="50%"
              transform="translateY(-50%)"
              onClick={handleNextSlide}
              colorScheme="whiteAlpha"
            />
            <Button
              className='btnall'
              position="absolute"
              right="5%"
              top="100%"
              color="white"
              transform="translateY(-50%)"
              variant='outline' size='lg'
            >
              <NavLink className="nav-link" to="/work">            View all Projects !
              </NavLink>
            </Button>
          </Box>

          <style>
            {`
        .activeSlide {
          opacity: 1;
          transition: opacity 3s ease-in-out;
        }
        .inactiveSlide {
          opacity: 0;
          transition: opacity 2s ease-in-out;
          pointer-events: none;
        }
        `}

          </style>
        </Center>
      </Hide >
      <Hide above='lg'>
        {cards.map((card, index) => (
          <Card maxW='100vw'
            width="100%"
            p="4"
            borderRadius="0%"

            bg="black"
          >
            <CardBody>
              <Image
                // className='pp1'
                src={card.imageUrl}
                alt={card.title}
                borderRadius='lg'
                w={{ base: "100%", md: "70%" }}
              // alignItems="center"

              />
              <Stack mt='6' spacing='3'
                color="white"

              >
                <Heading size='md'
                  fontFamily='Roboto Mono'
                  data-aos="fade-up"
                  mb={2}
                >{card.title}</Heading>
                <Text
                  pl="2"
                  data-aos="fade-left"
                  mb={2}
                  fontFamily='Roboto Mono'

                  borderLeft="4px solid yellow">
                  {card.description}
                </Text>
                <br />
                <Text
                  data-aos="fade-up"
                >
                  {card.description1}
                </Text>
                <br />
                <br />
                <Divider />
                <br />

              </Stack>
            </CardBody>

          </Card>
      </div>
        ))}

      </Hide>
      {/* the about me page or just a small slide */}
      {/* import the about page */}
      <About />
      <Footer />
    </>


  );
};

export default Homepage;
