import React from 'react';
import './HomePage.css'
import { Box, Flex, Image, Text, CardBody, Stack, Heading, CardFooter, Button } from '@chakra-ui/react';

const Card = ({ title, description, imageUrl }) => {
    return (
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
        >
            <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '200px' }}
                src='{imageUrl}'
                alt='Caffe Latte'
            />

            <Stack>
                <CardBody>
                    <Heading size='md'>  {title}</Heading>

                    <Text py='2'>
                        {description}
                    </Text>
                </CardBody>

                <CardFooter>
                    <Button variant='solid' colorScheme='blue'>
                        Buy Latte
                    </Button>
                </CardFooter>
            </Stack>
        </Card>
    );
};

export default Card;
