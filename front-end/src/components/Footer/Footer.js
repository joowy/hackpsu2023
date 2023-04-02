import React from 'react';
import { 
    Box, 
    Text, 
    VStack, 
    useColorModeValue 
    } from '@chakra-ui/react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      as="footer"
      bg={useColorModeValue('gray.100', 'gray.900')}
      py={6}
      borderTop="1px solid"
      borderTopColor={useColorModeValue('gray.200', 'gray.700')}
    >
      <VStack alignItems="center" justifyContent="center">
        <Text fontSize="sm">
          &copy; {currentYear} InclusiScore. All rights reserved.
        </Text>
      </VStack>
    </Box>
  );
};

export default Footer;