import React from 'react';
import { Spinner, Flex } from '@chakra-ui/react';
import './Loader.css';

const Loader = () => {
  return (
    <Flex className="loader-container" justifyContent="center" alignItems="center" height="100vh">
      <div className="loader-text">
        <span color='yellow'>LETS</span>
        <span>CONNECT</span>
      </div>
      <Spinner size="xl" className="loader-spinner" />
    </Flex>
  );
};

export default Loader;
