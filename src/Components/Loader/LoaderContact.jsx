import React from 'react';
import { Spinner, Flex } from '@chakra-ui/react';
import './OtherLoader.css';
const LoaderContact = () => {
    return (
        <Flex className="loader-container" justifyContent="center" alignItems="center" height="100vh">
            <div className="loader-text">
                <span color='yellow'>LETS CONNECT AND</span>
                <span>GET TO KNOW EACH OTHER :)</span>
            </div>
            <Spinner size="xl" className="loader-spinner" />
        </Flex>)
}

export default LoaderContact